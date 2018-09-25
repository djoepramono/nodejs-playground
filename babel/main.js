// Import (es6) is not known by node
import {shout, Message} from "junkbox.js"

const msg = new Message("Joe","heya");

shout(msg.value);
