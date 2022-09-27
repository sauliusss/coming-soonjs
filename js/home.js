// import

import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION

new Clock("#clock", clockData);
socials("footer .socials", socialsData);
