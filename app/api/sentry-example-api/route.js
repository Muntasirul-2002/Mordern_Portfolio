import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    // Intentionally throwing an error to test Sentry
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    // Here you can add Sentry error reporting if needed, for example:
    // Sentry.captureException(error);

    // Return a response indicating that an error was caught
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
