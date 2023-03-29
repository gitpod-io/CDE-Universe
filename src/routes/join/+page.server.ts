import { jobRoles } from "$lib/data";
import { fail } from "@sveltejs/kit";
import { z } from "zod";

const schema = z.object({
  name: z
    .string({ required_error: "Full name is required" })
    .trim()
    .min(1, "Can't be empty")
    .max(64, "Max length is 64 chars"),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please give a valid email" })
    .trim(),

  website: z.string({ required_error: "Company website is required" }).url(),

  role: z
    .string({ required_error: "Role is required" })
    .trim()
    .min(1, "Can't be empty"),

  question: z
    .string({ required_error: "Question is required" })
    .trim()
    .min(1, "Can't be empty")
    .max(256, "Max length is 256 chars"),
});

type Submission = z.infer<typeof schema>;

export const actions = {
  default: async ({ request, fetch }) => {
    // Raw unvalidated data from the form submission
    const rawData: Partial<Submission> = Object.fromEntries(
      await request.formData()
    );

    // Use zod to parse & validate the data
    const result = await schema.safeParseAsync(rawData);

    // If the parse & validate doesn't succeed return the errors
    if (!result.success) {
      const errors = result.error.flatten();

      return fail(400, {
        fieldErrors: errors.fieldErrors,
        success: false,
      });
    }

    try {
      // TODO send the data to storage here
    } catch (error) {
      // If there is an error return it
      return fail(400, {
        error: (error as any)?.message || "Failed to save",
        success: false,
      });
    }

    return {
      success: true,
    };
  },
};
