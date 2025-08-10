"use server";
export const saveCustomer = async (prevState, formData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");
  try {
    const res = await fetch(
      "https://phplaravel-1494371-5751203.cloudwaysapps.com/save-customer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return { success: true, message: "Sent Succefully." };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: error.message };
  }
};
