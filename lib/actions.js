"use server";

import { redirect } from "next/navigation";
import { saveJob } from "./jobs";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareJob(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    requirements: formData.get("requirements"),
    responsibilities: formData.get("responsibilities"),
    image: formData.get("image"),
    poster: formData.get("name"),
    poster_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.requirements) ||
    isInvalidText(meal.responsibilities) ||
    isInvalidText(meal.poster) ||
    isInvalidText(meal.poster_email) ||
    !meal.poster_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input");
  }

  await saveJob(meal);

  redirect("/meals");
}
