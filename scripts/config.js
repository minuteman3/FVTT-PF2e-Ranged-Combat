import { reload, reloadAll } from "./actions/reload.js";
import { huntPrey } from "./actions/hunt-prey.js";

Hooks.on(
    "init",
    () => {
        game.settings.register(
            "pf2e-ranged-combat",
            "preventFireNotLoaded",
            {
                name: "Prevent Firing Weapon if not Loaded",
                hint: "For weapons with a reload of at least 1, prevent attack rolls using that weapon unless you have the loaded effect for that weapon",
                scope: "world",
                config: true,
                type: Boolean,
                default: true
            }
        );

        game.settings.register(
            "pf2e-ranged-combat",
            "postFullAction",
            {
                name: "Post Full Action from Macros",
                hint: "When running macros that simulate taking actions, post the full action description to chat",
                scope: "world",
                config: true,
                type: Boolean,
                default: true
            }
        );

        game.pf2eRangedCombat = {
            reload,
            reloadAll,
            huntPrey
        };
    }
);