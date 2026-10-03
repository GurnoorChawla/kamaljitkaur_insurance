import { afterEach, describe, expect, it, vi } from "vitest";
import { POST as contactPost } from "../src/app/api/contact/route";

afterEach(() => {
  delete process.env.RESEND_API_KEY;
  delete process.env.RESEND_FROM_EMAIL;
  vi.unstubAllGlobals();
});

const validQuote = {
  name: "A Client",
  email: "client@example.ca",
  phone: "250-555-0100",
  interest: "Life insurance",
  message: "I would like to discuss coverage options.",
  consent: "on",
};

describe("public route validation and email delivery", () => {
  it("rejects sensitive topics on the general contact form", async () => {
    const request = new Request("http://localhost/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...validQuote, message: "My diagnosis is ..." }) });
    expect((await contactPost(request)).status).toBe(400);
  });

  it("returns unavailable when Resend is not configured", async () => {
    const request = new Request("http://localhost/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(validQuote) });
    expect((await contactPost(request)).status).toBe(503);
  });

  it("emails every submitted field to Kamaljit and sets the visitor as reply-to", async () => {
    process.env.RESEND_API_KEY = "test-api-key";
    process.env.RESEND_FROM_EMAIL = "Kamaljit <quotes@example.ca>";
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: "email-id" }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    const request = new Request("http://localhost/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(validQuote) });

    expect((await contactPost(request)).status).toBe(200);
    const [, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const payload = JSON.parse(options.body as string);
    expect(payload.to).toEqual(["punjabinsurancekelowna@gmail.com"]);
    expect(payload.reply_to).toBe(validQuote.email);
    expect(payload.text).toContain(validQuote.name);
    expect(payload.text).toContain(validQuote.phone);
    expect(payload.text).toContain(validQuote.interest);
    expect(payload.text).toContain(validQuote.message);
    expect(payload.text).toContain("Consent to be contacted: Yes");
  });

});
