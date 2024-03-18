import express from "express";
import { getPartnerSkills, createPartnerSkill, updatePartnerSkill, deletePartnerSkill, createManyPals } from "../controllers/partnerSkillController";

const router = express.Router();

router.get("/", getPartnerSkills);
router.post("/createPartnerSkill", createPartnerSkill);
router.put("/updatePartnerSkill", updatePartnerSkill);
router.delete("/deletePartnerSkill", deletePartnerSkill);

module.exports = router;
