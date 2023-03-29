import saveToSpreadsheet from "../../../lib/save-to-spreadsheet";
import type { WaitlistSignupData } from "../api";

const signupTypeToSheetTitle = {
  "cde-universe-2023-waitlist": "CDE Universe 2023 Waitlist",
};

export const POST = async ({ request }) => {
  const body: WaitlistSignupData = await request.json();

  const isSavedToSpreadsheet = await saveToSpreadsheet({
    sheetTitle: signupTypeToSheetTitle["cde-universe-2023-waitlist"],
    data: {
      name: body.name,
      email: body.email,
      companyWebsite: body.companyWebsite,
      jobRole: body.jobRole,
      message: body.message,
      timeStamp: new Date().toISOString(),
    },
  });

  let statusCode;

  if (isSavedToSpreadsheet === true) {
    statusCode = 201;
  } else if (isSavedToSpreadsheet === "duplicate") {
    statusCode = 409;
  } else {
    statusCode = 500;
  }

  return new Response(
    statusCode === 201
      ? "You're signed up"
      : "Something went wrong! Please try again later.",
    { status: statusCode }
  );
};
