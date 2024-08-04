import { FormData } from "../components/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }).catch((err) => {
    console.error(err);
    throw new Error("Failed to send email", err);
  });
}
