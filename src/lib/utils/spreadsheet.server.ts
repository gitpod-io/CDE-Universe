import gs from "google-spreadsheet";
import {
  FEEDBACK_SHEET_ID,
  FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
  FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
} from "$env/static/private";

interface SheetInfo {
  sheetTitle: string;
  data: any;
  uniqueColumn?: number;
}

export async function saveToSpreadsheet({ sheetTitle, data }: SheetInfo) {
  const doc = new gs.GoogleSpreadsheet(FEEDBACK_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: Buffer.from(
      FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
      "base64"
    ).toString("utf8"),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[sheetTitle];

  if (!sheet) {
    throw new Error(`No sheet found for ${sheetTitle}`);
  }

  // const uniqueKey = data[uniqueKey];

  // const rows = await sheet.getRows();
  // const existingKeys: string[] = rows.map(
  //   (row) => row._rawData[uniqueColumn]
  // );

  // if (existingKeys.includes(uniqueKey)) {
  // throw new Error("Email already signed up")
  // }

  await sheet.addRow(data);
}
