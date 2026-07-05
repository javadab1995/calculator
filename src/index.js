import "./style/style.css";
import "./utils/icon.js";
import "./utils/dom.js";

import { initTheme } from "./utils/theme.js";

import { age } from "./actions/age.js";
import { modalTemplate } from "./template/itemModal.js";
import { animateButton } from "./animation/animateButton.js";
import { initMenu } from "./utils/menu.js";
import { reqAnimate } from "./animation/reqAnimation.js";
import { initCalc } from "./calculations/calculator.js";
import { initMenuItems } from "./utils/menuItem.js";




initTheme();
initCalc();
initMenu();
initMenuItems()
