import './intranet.scss'
import 'jquery'
import './logo.png'
import './js/busca'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
library.add(faTwitter, faFacebookF, faYoutube);
dom.i2svg() 
// dom.watch()