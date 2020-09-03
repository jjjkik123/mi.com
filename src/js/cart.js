import $ from '../js/lib/jquery.js';
import { mySwiper2 } from '../js/lib/swiper.js';
import { les, checkAll, singleCheck, autoajax,deleteItem } from './lib/cartF.js';
$('footer').load('../html/footer.html');

(autoajax)();
checkAll();
deleteItem();




// SELECT product.* from users,product,items where items.u_id=users.id and items.p_id = product.p_id and users.id = 1
