import gs from "google-spreadsheet";
import {
  FEEDBACK_SHEET_ID,
  FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
  FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
} from "$env/static/private";

type SheetInfo = {
  sheetTitle: string;
  data: any;
  uniqueColumn?: number;
};

export default async ({
  sheetTitle,
  data,
}: SheetInfo): Promise<boolean | "duplicate"> => {
  try {
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
      console.error(`No sheet found for ${sheetTitle}`);
      return false;
    }

    // const uniqueKey = data[uniqueKey];

    // const rows = await sheet.getRows();
    // const existingKeys: string[] = rows.map(
    //   (row) => row._rawData[uniqueColumn]
    // );

    // if (existingKeys.includes(uniqueKey)) {
    //   return "duplicate";
    // }

    console.log(data);

    await sheet.addRow(data);
    // const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
