import { Router } from "express";
import generator from "./../utils/passwordsGenerator.js";

const router = Router();

router.get("/:quantity", (req, res)  => {
    const { quantity } = req.params;

    let passwords = [];

    for (let x = 0; x < quantity; x++) {
        passwords.push({ randomPassword: generator() });
    }

    res.json(passwords);
});

export default router;
