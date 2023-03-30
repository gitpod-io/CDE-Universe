import gs from "google-spreadsheet";
import {
  FEEDBACK_SHEET_ID,
  FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
  FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
} from "$env/static/private";

export let alreadySignedUp = false;

interface WaitlistData {
  name: string;
  email: string;
  companyWebsite: string;
  jobRole: string;
  message: string;
}

export async function addToWaitlist(data: WaitlistData) {
  const doc = new gs.GoogleSpreadsheet(FEEDBACK_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: Buffer.from(
      FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
      "base64"
    ).toString("utf8"),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle["CDE Universe 2023 Waitlist"];

  if (!sheet) {
    throw new Error("Unable to save to waitlist");
  }

  const rows = await sheet.getRows();
  const existingKeys: string[] = rows.map((row) => row._rawData[2]);

  if (existingKeys.includes(data.email)) {
    // throw redirect(307, "/join/already-joined");
    return (alreadySignedUp = true);
  }

  await sheet.addRow({
    ...data,
    timeStamp: new Date().toISOString(),
  });
}
