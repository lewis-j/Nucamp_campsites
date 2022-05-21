import { PARTNERS } from "../../app/shared/PARTNERS";

export const selectAllPartners = () => {
  return PARTNERS;
};

export const selectFeaturedParnter = () => {
  return PARTNERS.find((p) => p.featured);
};
