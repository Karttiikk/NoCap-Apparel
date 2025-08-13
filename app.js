// Product Data
const productsData = {"products":[{"id":1,"gender":"men","name":"Classic Oxford Shirt","brand":"Uniqlo","category":"Shirt","price":899,"mrp":1799,"rating":4.5,"condition":"Used","sale":true,"discountPercent":50,"saleEnd":"2030-12-31T23:59:59Z","image":"https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/462368/item/eugoods_64_462368_3x4.jpg?width=600","reviews":[{"username":"Arjun","rating":5,"date":"2025-07-20","text":"Great quality and perfectly cleaned. Looks brand new!"},{"username":"Vikram","rating":4,"date":"2025-07-23","text":"Fabric feels premium at this price."},{"username":"Neil","rating":5,"date":"2025-07-25","text":"Love the fit. Would buy again."}]},
{"id":2,"gender":"men","name":"Graphic Tee","brand":"H&M","category":"T-Shirt","price":499,"mrp":1299,"rating":4.2,"condition":"New","sale":true,"discountPercent":62,"saleEnd":"2030-12-31T23:59:59Z","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hSbVZHZ1Pdvv-9yrpu8oy3YimK73OsopwQ&s","reviews":[{"username":"Rahul","rating":4,"date":"2025-07-19","text":"Cool print and comfy cotton."},{"username":"Dev","rating":5,"date":"2025-07-21","text":"Absolute steal at this price!"},{"username":"Kabir","rating":4,"date":"2025-07-26","text":"Size runs slightly large."}]},
{"id":3,"gender":"men","name":"Slim Fit Jeans","brand":"Levi's","category":"Jeans","price":1499,"mrp":2999,"rating":4.6,"condition":"Used","sale":true,"discountPercent":50,"saleEnd":"2030-12-31T23:59:59Z","image":"https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/4/_/fit-in/1000x1333/4_mft-33410-t-134-blue-black.jpg","reviews":[{"username":"Sahil","rating":5,"date":"2025-07-18","text":"No fades, looks pristine."},{"username":"Manish","rating":4,"date":"2025-07-22","text":"Stretchy and comfortable."},{"username":"Rohit","rating":5,"date":"2025-07-24","text":"Authentic Levi's tags intact."}]},
{"id":4,"gender":"men","name":"Bomber Jacket","brand":"Zara","category":"Jacket","price":2199,"mrp":5499,"rating":4.7,"condition":"New","sale":true,"discountPercent":60,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/4453297/2024/6/25/69adb2c4-fb31-4394-9151-678653b149a11719298757061-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg","reviews":[{"username":"Karan","rating":5,"date":"2025-07-17","text":"Lightweight yet warm."},{"username":"Ankit","rating":4,"date":"2025-07-20","text":"Stylish cut, premium feel."},{"username":"Harsh","rating":5,"date":"2025-07-23","text":"Delivered quickly, well packed."}]},
{"id":5,"gender":"men","name":"Fleece Sweatshirt","brand":"Gap","category":"Sweatshirt","price":799,"mrp":1999,"rating":4.4,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://5.imimg.com/data5/SELLER/Default/2020/11/ZO/MS/DV/56945437/sweatshirt-jpg-500x500.jpg","reviews":[{"username":"Yash","rating":4,"date":"2025-07-15","text":"Soft and warm, minor pilling."},{"username":"Vivek","rating":5,"date":"2025-07-18","text":"Great for Mumbai winters."},{"username":"Aman","rating":4,"date":"2025-07-22","text":"Neutral color goes with all."}]},
{"id":6,"gender":"men","name":"Festive Kurta","brand":"Manyavar","category":"Ethnic Wear","price":1299,"mrp":2599,"rating":4.3,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://assets.ekatvacollections.com/kurta/2000835/11.jpg","reviews":[{"username":"Akash","rating":4,"date":"2025-07-16","text":"Bright color, good stitching."},{"username":"Pranav","rating":5,"date":"2025-07-19","text":"Perfect for festivals."},{"username":"Girish","rating":4,"date":"2025-07-21","text":"Fabric slightly thin."}]},
{"id":7,"gender":"men","name":"Zip Hoodie","brand":"Adidas","category":"Hoodie","price":1299,"mrp":3499,"rating":4.5,"condition":"Used","sale":true,"discountPercent":63,"saleEnd":"2030-12-31T23:59:59Z","image":"https://m.media-amazon.com/images/I/617L3XG3PxL._SX679_.jpg","reviews":[{"username":"Sameer","rating":5,"date":"2025-07-14","text":"Barely looks used."},{"username":"Nikhil","rating":4,"date":"2025-07-18","text":"Zips smoothly."},{"username":"Faiz","rating":5,"date":"2025-07-23","text":"Great workout layer."}]},
{"id":8,"gender":"men","name":"Chino Shorts","brand":"Old Navy","category":"Shorts","price":599,"mrp":1599,"rating":4.1,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/148791s.jpg?im=Resize,width=750","reviews":[{"username":"Aditya","rating":4,"date":"2025-07-12","text":"Color true to pic."},{"username":"Jay","rating":4,"date":"2025-07-15","text":"Stitching neat."},{"username":"Tushar","rating":4,"date":"2025-07-20","text":"Good for daily wear."}]},
{"id":9,"gender":"men","name":"Leather Jacket","brand":"Superdry","category":"Jacket","price":3499,"mrp":9999,"rating":4.8,"condition":"Used","sale":true,"discountPercent":65,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.ajio.com/medias/sys_master/root/20231111/Yvij/654fa164ddf77915197fede9/-1117Wx1400H-410393575-9ze-MODEL.jpg","reviews":[{"username":"Rajat","rating":5,"date":"2025-07-10","text":"Premium leather, smells new."},{"username":"Deep","rating":5,"date":"2025-07-15","text":"Super value!"},{"username":"Kush","rating":4,"date":"2025-07-19","text":"Fits slim."}]},
{"id":10,"gender":"men","name":"Denim Jacket","brand":"Lee","category":"Jacket","price":1799,"mrp":4299,"rating":4.4,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://www.jeanscene.co.uk/media/catalog/product/cache/da66d3673630b133eb15fde455870375/l/8/l87amwfw_4.jpg","reviews":[{"username":"Varun","rating":5,"date":"2025-07-11","text":"Classic look."},{"username":"Rohan","rating":4,"date":"2025-07-14","text":"Buttons sturdy."},{"username":"Navin","rating":4,"date":"2025-07-18","text":"A little heavy."}]},
{"id":11,"gender":"men","name":"Formal Trousers","brand":"Van Heusen","category":"Trousers","price":999,"mrp":2499,"rating":4.2,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://imagescdn.vanheusenindia.com/img/app/product/9/917369-11448689.jpg?auto=format&w=390","reviews":[{"username":"Abhay","rating":4,"date":"2025-07-09","text":"Looks new."},{"username":"Dinesh","rating":5,"date":"2025-07-13","text":"Perfect office wear."},{"username":"Kamal","rating":4,"date":"2025-07-17","text":"True to size."}]},
{"id":12,"gender":"men","name":"Sports Joggers","brand":"Puma","category":"Joggers","price":899,"mrp":1999,"rating":4.3,"condition":"New","sale":true,"discountPercent":55,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/17537688/2022/3/17/0214acae-14eb-4c11-86f0-23fc404211121647493962571TrackPants1.jpg","reviews":[{"username":"Arnav","rating":5,"date":"2025-07-08","text":"Breathable fabric."},{"username":"Ishaan","rating":4,"date":"2025-07-12","text":"Good stretch."},{"username":"Devansh","rating":4,"date":"2025-07-16","text":"Color stays after wash."}]},
{"id":13,"gender":"men","name":"Plaid Shirt","brand":"Forever21","category":"Shirt","price":699,"mrp":1499,"rating":4.1,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://img.tatacliq.com/images/i9/437Wx649H/MP000000015603336_437Wx649H_202212081309121.jpeg","reviews":[{"username":"Mayank","rating":4,"date":"2025-07-07","text":"Soft cotton."},{"username":"Sid","rating":4,"date":"2025-07-11","text":"Colors vibrant."},{"username":"Tarun","rating":3.5,"date":"2025-07-14","text":"Slightly faded cuff."}]},
{"id":14,"gender":"men","name":"Polo Shirt","brand":"US Polo","category":"T-Shirt","price":799,"mrp":1699,"rating":4.5,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19022800/2022/8/2/15febdfd-47b7-4282-bff1-1ca57fd2b9691659421632486-US-Polo-Assn-Men-Tshirts-2541659421632066-1.jpg","reviews":[{"username":"Parth","rating":5,"date":"2025-07-06","text":"Classic polo, good collar."},{"username":"Raj","rating":4,"date":"2025-07-10","text":"True color."},{"username":"Dhruv","rating":5,"date":"2025-07-13","text":"Lightweight fabric."}]},
{"id":15,"gender":"men","name":"Wool Blazer","brand":"Marks & Spencer","category":"Blazer","price":2599,"mrp":6499,"rating":4.6,"condition":"Used","sale":true,"discountPercent":60,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.digitalcontent.marksandspencer.app/images/w_2560,q_auto,f_auto/SD_03_T15_2361Y_F0_X_EC_0/Regular-Fit-Herringbone-Pure-Wool-Suit-Jacket","reviews":[{"username":"Rakesh","rating":5,"date":"2025-07-05","text":"Looks tailor-made."},{"username":"Lokesh","rating":4.5,"date":"2025-07-09","text":"Wool feels premium."},{"username":"Saif","rating":4,"date":"2025-07-12","text":"Buttons slightly loose."}]},
{"id":16,"gender":"men","name":"Cargo Pants","brand":"Hollister","category":"Pants","price":999,"mrp":2499,"rating":4.0,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://img01.ztat.net/article/spp-media-p1/86e7ea2d489840e8aef11f1b3975f953/bc4afa1d30274d9cad74f23515e44399.jpg?imwidth=300","reviews":[{"username":"Kapil","rating":4,"date":"2025-07-04","text":"Many pockets, good stitch."},{"username":"Mehul","rating":4,"date":"2025-07-08","text":"Color as expected."},{"username":"Ronit","rating":3.5,"date":"2025-07-11","text":"Fabric a bit stiff."}]},
{"id":17,"gender":"men","name":"Ethnic Nehru Jacket","brand":"Peter England","category":"Ethnic Wear","price":1499,"mrp":3299,"rating":4.4,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://imagescdn.peterengland.com/img/app/product/6/688675-15157388.jpg?auto=format&w=390","reviews":[{"username":"Gaurav","rating":5,"date":"2025-07-03","text":"Perfect over kurta."},{"username":"Bhavesh","rating":4,"date":"2025-07-07","text":"Clean and fresh."},{"username":"Ashwin","rating":4,"date":"2025-07-10","text":"Button gaps slightly wide."}]},
{"id":18,"gender":"men","name":"Athletic Shorts","brand":"Nike","category":"Shorts","price":699,"mrp":1599,"rating":4.3,"condition":"New","sale":true,"discountPercent":56,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/16331410/2022/1/3/ed5f8551-06a4-4758-8773-1b037c5250531641191293597-Nike-Dri-FIT-Academy-Mens-Woven-Soccer-Shorts-27516411912929-1.jpg","reviews":[{"username":"Neil","rating":5,"date":"2025-07-02","text":"Lightweight for runs."},{"username":"Uday","rating":4,"date":"2025-07-06","text":"Pockets deep."},{"username":"Vikrant","rating":4,"date":"2025-07-09","text":"Elastic waistband good."}]},
{"id":19,"gender":"men","name":"Crew Neck Sweater","brand":"Topman","category":"Sweater","price":1099,"mrp":2799,"rating":4.2,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://images.asos-media.com/products/topman-relaxed-fit-brushed-sweater-in-gray/206630424-1-grey?$n_640w$&wid=513&fit=constrain","reviews":[{"username":"Irfan","rating":4,"date":"2025-07-01","text":"Warm yet breathable."},{"username":"Rishi","rating":4,"date":"2025-07-04","text":"Minimal pilling."},{"username":"Yuvraj","rating":4,"date":"2025-07-08","text":"Color intact."}]},
{"id":20,"gender":"men","name":"Puffer Jacket","brand":"North Face","category":"Jacket","price":2499,"mrp":6999,"rating":4.7,"condition":"New","sale":true,"discountPercent":64,"saleEnd":"2030-12-31T23:59:59Z","image":"https://images-cdn.ubuy.co.in/65b35c136293995086637b26-brand-new-the-north-face-1996-retro.jpg","reviews":[{"username":"Arpit","rating":5,"date":"2025-07-01","text":"Super warm."},{"username":"Shaan","rating":4.5,"date":"2025-07-03","text":"Lightweight."},{"username":"Pratik","rating":5,"date":"2025-07-06","text":"Great buy."}]},

{"id":21,"gender":"women","name":"Floral Summer Dress","brand":"Forever21","category":"Dress","price":999,"mrp":2499,"rating":4.6,"condition":"New","sale":true,"discountPercent":60,"saleEnd":"2030-12-31T23:59:59Z","image":"https://f.nooncdn.com/p/pzsku/Z9079547B9E56D58B2C5EZ/45/_/1742539629/9d600110-51ac-42b5-b475-3512a45253ad.jpg?width=800","reviews":[{"username":"Ayesha","rating":5,"date":"2025-07-20","text":"Lovely print, airy."},{"username":"Neha","rating":4,"date":"2025-07-22","text":"Color as expected."},{"username":"Pooja","rating":5,"date":"2025-07-25","text":"Great for brunch."}]},
{"id":22,"gender":"women","name":"Silk Top","brand":"Zara","category":"Top","price":899,"mrp":2199,"rating":4.4,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://i.ebayimg.com/images/g/6QEAAOSwOyJleRaz/s-l1200.jpg","reviews":[{"username":"Divya","rating":4,"date":"2025-07-18","text":"Feels luxurious."},{"username":"Meera","rating":5,"date":"2025-07-20","text":"No stains, well cleaned."},{"username":"Anjali","rating":4,"date":"2025-07-24","text":"Runs a bit small."}]},
{"id":23,"gender":"women","name":"High-Waist Jeans","brand":"Levi's","category":"Jeans","price":1599,"mrp":3299,"rating":4.7,"condition":"New","sale":true,"discountPercent":52,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29266122/2024/6/5/87a47d0c-a46f-4d93-97ab-a6db6cdfd90a1717580462356-Levis-Women-Jeans-7651717580461631-1.jpg","reviews":[{"username":"Kritika","rating":5,"date":"2025-07-17","text":"Perfect high rise."},{"username":"Shreya","rating":4.5,"date":"2025-07-19","text":"Stretch fabric comfy."},{"username":"Lavanya","rating":5,"date":"2025-07-22","text":"Flattering fit."}]},
{"id":24,"gender":"women","name":"Knee-Length Skirt","brand":"H&M","category":"Skirt","price":799,"mrp":1999,"rating":4.2,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://image.hm.com/assets/hm/c6/1d/c61dd3b6c2c258448b46c59182845011ec4787e7.jpg?imwidth=1260","reviews":[{"username":"Aditi","rating":4,"date":"2025-07-16","text":"Good fabric weight."},{"username":"Sonali","rating":4,"date":"2025-07-18","text":"No defects found."},{"username":"Isha","rating":4,"date":"2025-07-21","text":"Neutral color versatile."}]},
{"id":25,"gender":"women","name":"Indigo Kurti","brand":"FabIndia","category":"Ethnic Wear","price":1099,"mrp":2699,"rating":4.3,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://m.media-amazon.com/images/I/51-i7LY4aaL._UY1100_.jpg","reviews":[{"username":"Rhea","rating":4,"date":"2025-07-15","text":"Dye doesn't bleed."},{"username":"Gayatri","rating":5,"date":"2025-07-17","text":"Elegant design."},{"username":"Sneha","rating":4,"date":"2025-07-19","text":"Sleeves slightly long."}]},
{"id":26,"gender":"women","name":"Cropped Denim Jacket","brand":"Levi's","category":"Jacket","price":1899,"mrp":4599,"rating":4.5,"condition":"New","sale":true,"discountPercent":59,"saleEnd":"2030-12-31T23:59:59Z","image":"https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0180405450351_091_b?$xlarge$&fit=constrain&qlt=80&wid=640","reviews":[{"username":"Myra","rating":5,"date":"2025-07-14","text":"Trendy cut."},{"username":"Ritika","rating":4.5,"date":"2025-07-16","text":"Good stretch."},{"username":"Vani","rating":4,"date":"2025-07-18","text":"Buttons sturdy."}]},
{"id":27,"gender":"women","name":"Cotton Kurta Set","brand":"Biba","category":"Ethnic Wear","price":1399,"mrp":2999,"rating":4.4,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://images.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw9a193462/images/ss25/skdasrt10053ss25yel_1.jpg","reviews":[{"username":"Jaya","rating":4,"date":"2025-07-13","text":"Comfortable cotton."},{"username":"Prachi","rating":5,"date":"2025-07-16","text":"Dupatta included."},{"username":"Lata","rating":4,"date":"2025-07-18","text":"Print beautiful."}]},
{"id":28,"gender":"women","name":"Wrap Dress","brand":"Mango","category":"Dress","price":1299,"mrp":3199,"rating":4.6,"condition":"New","sale":true,"discountPercent":59,"saleEnd":"2030-12-31T23:59:59Z","image":"https://images-cdn.ubuy.co.in/66162e95581c26394a3f834f-mango-37013845-dresses-and-jumpsuits.jpg","reviews":[{"username":"Sara","rating":5,"date":"2025-07-12","text":"Flattering wrap."},{"username":"Naina","rating":4.5,"date":"2025-07-14","text":"Soft fabric."},{"username":"Tina","rating":4.5,"date":"2025-07-17","text":"Perfect length."}]},
{"id":29,"gender":"women","name":"Oversized Sweater","brand":"Gap","category":"Sweater","price":999,"mrp":2299,"rating":4.1,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmoCa-doPxh9EqYS2BV1gwGTtErqB-DYWTQ&s","reviews":[{"username":"Veda","rating":4,"date":"2025-07-11","text":"Cozy feel."},{"username":"Bhavya","rating":4,"date":"2025-07-13","text":"Color accurate."},{"username":"Farah","rating":4,"date":"2025-07-15","text":"Slightly loose cuffs."}]},
{"id":30,"gender":"women","name":"Anarkali Dress","brand":"Global Desi","category":"Ethnic Wear","price":1799,"mrp":3899,"rating":4.5,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://img.tatacliq.com/images/i8/437Wx649H/MP000000014164211_437Wx649H_202208191207381.jpeg","reviews":[{"username":"Shanaya","rating":5,"date":"2025-07-10","text":"Flowy and elegant."},{"username":"Tanvi","rating":4.5,"date":"2025-07-12","text":"Perfect for weddings."},{"username":"Amrita","rating":4,"date":"2025-07-14","text":"Color as shown."}]},
{"id":31,"gender":"women","name":"Linen Pants","brand":"Uniqlo","category":"Pants","price":899,"mrp":1999,"rating":4.0,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40Jai_D2ZzG6g4LRKsH2UMbJPEXDT7tWPyA&s","reviews":[{"username":"Charu","rating":4,"date":"2025-07-09","text":"Breathable linen."},{"username":"Mitali","rating":4,"date":"2025-07-11","text":"Waist fits well."},{"username":"Rupa","rating":4,"date":"2025-07-13","text":"Creases easily."}]},
{"id":32,"gender":"women","name":"Sleeveless Tank","brand":"Nike","category":"Top","price":499,"mrp":999,"rating":4.2,"condition":"New","sale":true,"discountPercent":50,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/4/kLCeN9ED_bc6742255b39454087a76aded549f3fd.jpg","reviews":[{"username":"Payal","rating":4,"date":"2025-07-08","text":"Great for workouts."},{"username":"Shalini","rating":4.5,"date":"2025-07-10","text":"Wicks sweat."},{"username":"Rashmi","rating":4,"date":"2025-07-12","text":"Armholes a bit big."}]},
{"id":33,"gender":"women","name":"Bomber Jacket","brand":"Only","category":"Jacket","price":1599,"mrp":3999,"rating":4.3,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHv7bq7TheMhqCWXiuqs0737pXHGpoUSBCg&s","reviews":[{"username":"Kanika","rating":4,"date":"2025-07-07","text":"Trendy look."},{"username":"Aaradhya","rating":4.5,"date":"2025-07-09","text":"Feels new."},{"username":"Geet","rating":4,"date":"2025-07-11","text":"Zip sturdy."}]},
{"id":34,"gender":"women","name":"Ripped Jeans","brand":"Pepe","category":"Jeans","price":1399,"mrp":2999,"rating":4.4,"condition":"New","sale":true,"discountPercent":53,"saleEnd":"2030-12-31T23:59:59Z","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwa6m6lmRXiqLYmnytfqJTpwyYixoMlrWyg&s","reviews":[{"username":"Mahika","rating":5,"date":"2025-07-06","text":"Edgy style."},{"username":"Ipsita","rating":4.5,"date":"2025-07-08","text":"Good stretch."},{"username":"Jahnvi","rating":4,"date":"2025-07-10","text":"High waist flattering."}]},
{"id":35,"gender":"women","name":"Maxi Dress","brand":"H&M","category":"Dress","price":1199,"mrp":2799,"rating":4.3,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://image.hm.com/assets/hm/eb/03/eb03b60690dd54d8a656321132a9eaa0c04f9cf1.jpg?imwidth=2160","reviews":[{"username":"Heena","rating":4,"date":"2025-07-05","text":"Flowy fabric."},{"username":"Roma","rating":4.5,"date":"2025-07-07","text":"Nice length."},{"username":"Apoorva","rating":4,"date":"2025-07-09","text":"Print slightly faded."}]},
{"id":36,"gender":"women","name":"Sequin Party Top","brand":"Vero Moda","category":"Top","price":999,"mrp":2299,"rating":4.1,"condition":"New","sale":true,"discountPercent":56,"saleEnd":"2030-12-31T23:59:59Z","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2q-Vh6Q7oVzz2oAyDvsgPfepF_JE0LLGtA&s","reviews":[{"username":"Komal","rating":4,"date":"2025-07-04","text":"Sparkles nicely."},{"username":"Ruchi","rating":4,"date":"2025-07-06","text":"Not itchy inside."},{"username":"Grishma","rating":4.5,"date":"2025-07-08","text":"Perfect for parties."}]},
{"id":37,"gender":"women","name":"Leather Skirt","brand":"Mango","category":"Skirt","price":1499,"mrp":3499,"rating":4.2,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://images.asos-media.com/products/mango-satin-midi-skirt-in-brown/207802296-2","reviews":[{"username":"Rimal","rating":4,"date":"2025-07-03","text":"Soft faux leather."},{"username":"Sonia","rating":4,"date":"2025-07-05","text":"Minimal wear."},{"username":"Zoya","rating":4,"date":"2025-07-07","text":"Stylish look."}]},
{"id":38,"gender":"women","name":"Wool Coat","brand":"Marks & Spencer","category":"Coat","price":2499,"mrp":5999,"rating":4.5,"condition":"New","sale":true,"discountPercent":58,"saleEnd":"2030-12-31T23:59:59Z","image":"https://assets.digitalcontent.marksandspencer.app/images/w_2560,q_auto,f_auto/MS_10_T83_8793S_M0_X_EC_0/Wool-Rich-Single-Breasted-Overcoat","reviews":[{"username":"Sakshi","rating":5,"date":"2025-07-02","text":"Very warm."},{"username":"Ankita","rating":4.5,"date":"2025-07-04","text":"Elegant design."},{"username":"Bhavna","rating":4,"date":"2025-07-06","text":"Buttons secure."}]},
{"id":39,"gender":"women","name":"Blouse with Bell Sleeves","brand":"ONLY","category":"Top","price":699,"mrp":1599,"rating":4.0,"condition":"Used","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30012242/2024/9/16/cc4e0c10-d439-4d99-968f-8cfc064eb69b1726478178611-her-by-invictus-Women-Tops-7081726478178116-1.jpg","reviews":[{"username":"Snehal","rating":4,"date":"2025-07-01","text":"Cute sleeves."},{"username":"Mallika","rating":4,"date":"2025-07-03","text":"Looks new."},{"username":"Anusha","rating":3.5,"date":"2025-07-05","text":"Runs larger."}]},
{"id":40,"gender":"women","name":"Saree Blouse","brand":"Suta","category":"Ethnic Wear","price":599,"mrp":1299,"rating":4.3,"condition":"New","sale":false,"discountPercent":0,"saleEnd":null,"image":"https://i.pinimg.com/236x/03/e5/24/03e524c3f2e2ec3c509e0fb6ef7577c6.jpg","reviews":[{"username":"Diya","rating":4,"date":"2025-06-30","text":"Perfect fit."},{"username":"Rakhi","rating":4.5,"date":"2025-07-02","text":"Soft fabric."},{"username":"Veda","rating":4,"date":"2025-07-04","text":"Good stitching."}]}]};

// Carousel data from JSON
const carouselSlides = [
    {
        id: 1,
        title: "International Brands",
        subtitle: "Up to 70% Off Launch Sale",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
        cta: "Shop Now"
    },
    {
        id: 2, 
        title: "Premium Dead Stock",
        subtitle: "Brand New at Minimal Prices",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop",
        cta: "Explore Collection"
    },
    {
        id: 3,
        title: "Verified & Clean",
        subtitle: "Every Item Inspected for Quality",
        image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&h=400&fit=crop", 
        cta: "View All"
    }
];

// Promo codes
const promoCodes = [
    {
        code: "NOCAP10",
        discount: 10,
        type: "percentage",
        description: "10% off on all items"
    },
    {
        code: "LAUNCH20", 
        discount: 20,
        type: "percentage",
        description: "20% off launch special"
    },
    {
        code: "NEWUSER15",
        discount: 15, 
        type: "percentage",
        description: "15% off for new users"
    }
];

// Global State
let currentView = 'home';
let currentProducts = [];
let filteredProducts = [];
let cart = [];
let countdownIntervals = [];
let currentSlide = 0;
let carouselInterval;
let appliedPromoCode = null;

// Utility Functions
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">⭐</span>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<span class="star">⭐</span>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star empty">⭐</span>';
    }
    
    return starsHTML;
}

function updateCountdown(elementId, endDate) {
    if (!endDate) return;
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const end = new Date(endDate).getTime();
        const distance = end - now;
        
        if (distance < 0) {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = '<span class="countdown-expired">Deal Ended</span>';
            }
            clearInterval(interval);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (elementId === 'hero-countdown') {
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = days;
            if (hoursEl) hoursEl.textContent = hours;
            if (minutesEl) minutesEl.textContent = minutes;
            if (secondsEl) secondsEl.textContent = seconds;
        } else {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
    }, 1000);
    
    countdownIntervals.push(interval);
}

// Navigation Functions
function navigateToMen() {
    window.location.hash = '#/men';
}

function navigateToWomen() {
    window.location.hash = '#/women';
}

function navigateToHome() {
    window.location.hash = '#/';
}

// Carousel Functions
function initializeCarousel() {
    const wrapper = document.getElementById('carousel-wrapper');
    const indicators = document.getElementById('carousel-indicators');
    
    if (!wrapper || !indicators) return;
    
    // Create slides
    wrapper.innerHTML = carouselSlides.map(slide => `
        <div class="carousel-slide" style="background-image: url('${slide.image}')">
            <div class="carousel-content">
                <h2 class="carousel-title">${slide.title}</h2>
                <p class="carousel-subtitle">${slide.subtitle}</p>
                <button class="carousel-cta" onclick="navigateToMen()">${slide.cta}</button>
            </div>
        </div>
    `).join('');
    
    // Create indicators
    indicators.innerHTML = carouselSlides.map((_, index) => `
        <div class="carousel-indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
    `).join('');
    
    // Start autoplay
    startCarouselAutoplay();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarouselView();
    resetCarouselAutoplay();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    updateCarouselView();
    resetCarouselAutoplay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    updateCarouselView();
    resetCarouselAutoplay();
}

function updateCarouselView() {
    const wrapper = document.getElementById('carousel-wrapper');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (wrapper) {
        wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startCarouselAutoplay() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function resetCarouselAutoplay() {
    clearInterval(carouselInterval);
    startCarouselAutoplay();
}

// Product Card Generation
function createProductCard(product) {
    const conditionClass = product.condition === 'Used' ? 'condition-used' : 'condition-new';
    const conditionText = product.condition === 'Used' ? 'Used' : 'New (Dead Stock)';
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card__image-container">
                <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy">
                <div class="product-card__condition ${conditionClass}">${conditionText}</div>
                ${product.sale ? `<div class="product-card__sale-badge">${product.discountPercent}% OFF</div>` : ''}
                <div class="product-card__overlay">
                    <button class="quick-view-btn" onclick="event.stopPropagation(); openProductModal(${product.id})">Quick View</button>
                    <button class="add-to-cart-overlay-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
            <div class="product-card__content">
                <div class="product-card__brand">${product.brand}</div>
                <h3 class="product-card__name">${product.name}</h3>
                <div class="product-card__rating">
                    <div class="rating">${generateStars(product.rating)}</div>
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="product-card__price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.sale ? `<span class="original-price">${formatPrice(product.mrp)}</span>` : ''}
                    ${product.sale ? `<span class="discount">${product.discountPercent}% OFF</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Views Management
function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });
    
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.remove('hidden');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const targetHash = viewName === 'home' ? '#/' : `#/${viewName}`;
    const activeLink = document.querySelector(`.nav-link[href="${targetHash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentView = viewName;
}

function showHome() {
    showView('home');
    initializeCarousel();
    loadHighlights();
    loadSalesStrip();
    
    // Start hero countdown (7 days from now)
    const heroEndDate = new Date();
    heroEndDate.setDate(heroEndDate.getDate() + 7);
    updateCountdown('hero-countdown', heroEndDate.toISOString());
}

function showCollection(gender) {
    showView('collection');
    
    const title = gender === 'men' ? "Men's Collection" : "Women's Collection";
    const titleElement = document.getElementById('collection-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
    
    currentProducts = productsData.products.filter(product => product.gender === gender);
    filteredProducts = [...currentProducts];
    
    renderProducts();
    resetFilters();
}

function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some items before checkout.');
        return;
    }
    
    showView('checkout');
    renderCheckoutItems();
    updateCheckoutTotals();
}

function loadHighlights() {
    const menProducts = productsData.products.filter(p => p.gender === 'men').slice(0, 3);
    const womenProducts = productsData.products.filter(p => p.gender === 'women').slice(0, 3);
    const highlights = [...menProducts, ...womenProducts];
    
    const carousel = document.getElementById('highlights-carousel');
    if (carousel) {
        carousel.innerHTML = highlights.map(product => `
            <div class="product-card" style="min-width: 280px; cursor: pointer;" onclick="openProductModal(${product.id})">
                <div class="product-card__image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-card__image" loading="lazy">
                    <div class="product-card__condition ${product.condition === 'Used' ? 'condition-used' : 'condition-new'}">
                        ${product.condition === 'Used' ? 'Used' : 'New (Dead Stock)'}
                    </div>
                    ${product.sale ? `<div class="product-card__sale-badge">${product.discountPercent}% OFF</div>` : ''}
                </div>
                <div class="product-card__content">
                    <div class="product-card__brand">${product.brand}</div>
                    <h3 class="product-card__name">${product.name}</h3>
                    <div class="product-card__price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.sale ? `<span class="original-price">${formatPrice(product.mrp)}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadSalesStrip() {
    const saleProducts = productsData.products.filter(product => product.sale);
    const salesStrip = document.getElementById('sales-strip');
    
    if (salesStrip) {
        salesStrip.innerHTML = saleProducts.slice(0, 8).map(product => `
            <div class="sale-item" onclick="openProductModal(${product.id})">
                <div class="sale-item__title">${product.name}</div>
                <div class="sale-item__discount">${product.discountPercent}% OFF</div>
                <div class="sale-item__price">${formatPrice(product.price)}</div>
                ${product.saleEnd ? `<div class="sale-item__time" id="sale-${product.id}">Loading...</div>` : ''}
            </div>
        `).join('');
        
        // Start countdown timers for sale items
        saleProducts.forEach(product => {
            if (product.saleEnd) {
                updateCountdown(`sale-${product.id}`, product.saleEnd);
            }
        });
    }
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (grid) {
        grid.innerHTML = filteredProducts.map(createProductCard).join('');
    }
}

function resetFilters() {
    const priceFilter = document.getElementById('price-filter');
    const conditionFilter = document.getElementById('condition-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchFilter = document.getElementById('search-filter');
    
    if (priceFilter) priceFilter.value = '';
    if (conditionFilter) conditionFilter.value = '';
    if (ratingFilter) ratingFilter.value = '';
    if (searchFilter) searchFilter.value = '';
}

// Filtering and Sorting
function applyFilters() {
    const priceFilter = document.getElementById('price-filter');
    const conditionFilter = document.getElementById('condition-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchFilter = document.getElementById('search-filter');
    
    const priceValue = priceFilter ? priceFilter.value : '';
    const conditionValue = conditionFilter ? conditionFilter.value : '';
    const ratingValue = ratingFilter ? ratingFilter.value : '';
    const searchValue = searchFilter ? searchFilter.value.toLowerCase() : '';
    
    filteredProducts = currentProducts.filter(product => {
        // Condition filter
        if (conditionValue && product.condition !== conditionValue) {
            return false;
        }
        
        // Rating filter
        if (ratingValue && product.rating < parseFloat(ratingValue)) {
            return false;
        }
        
        // Search filter
        if (searchValue && 
            !product.name.toLowerCase().includes(searchValue) && 
            !product.brand.toLowerCase().includes(searchValue)) {
            return false;
        }
        
        return true;
    });
    
    // Price sorting
    if (priceValue === 'low-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceValue === 'high-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    renderProducts();
}

// Checkout Functions
function renderCheckoutItems() {
    const container = document.getElementById('checkout-items');
    if (!container) return;
    
    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}" class="checkout-item__image">
            <div class="checkout-item__details">
                <div class="checkout-item__name">${item.name}</div>
                <div class="checkout-item__brand">${item.brand}</div>
                <div class="checkout-item__price">${formatPrice(item.price)} × ${item.quantity}</div>
            </div>
        </div>
    `).join('');
}

function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 999 ? 0 : 99; // Free shipping over ₹999
    let discount = 0;
    
    if (appliedPromoCode) {
        if (appliedPromoCode.type === 'percentage') {
            discount = Math.round(subtotal * (appliedPromoCode.discount / 100));
        }
    }
    
    const total = subtotal - discount + shipping;
    
    const subtotalEl = document.getElementById('checkout-subtotal');
    const discountEl = document.getElementById('checkout-discount');
    const discountRow = document.getElementById('discount-row');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (discountEl) discountEl.textContent = `-${formatPrice(discount)}`;
    if (discountRow) {
        discountRow.classList.toggle('hidden', discount === 0);
    }
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    if (totalEl) totalEl.textContent = formatPrice(total);
}

function applyPromoCode() {
    const promoInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    
    if (!promoInput || !promoMessage) return;
    
    const code = promoInput.value.toUpperCase().trim();
    
    if (!code) {
        promoMessage.textContent = 'Please enter a promo code.';
        promoMessage.className = 'promo-message error';
        return;
    }
    
    const validCode = promoCodes.find(promo => promo.code === code);
    
    if (validCode) {
        appliedPromoCode = validCode;
        promoMessage.textContent = `✓ ${validCode.description} applied!`;
        promoMessage.className = 'promo-message success';
        updateCheckoutTotals();
    } else {
        promoMessage.textContent = 'Invalid promo code. Please try again.';
        promoMessage.className = 'promo-message error';
        appliedPromoCode = null;
        updateCheckoutTotals();
    }
}

function placeOrder() {
    const form = document.getElementById('checkout-form');
    if (!form || !form.checkValidity()) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
    }
    
    // Simulate order placement
    const orderTotal = document.getElementById('checkout-total')?.textContent || '₹0';
    alert(`Order placed successfully! Total: ${orderTotal}\nPayment Method: ${paymentMethod.value.toUpperCase()}\nYou will receive a confirmation email shortly.`);
    
    // Clear cart and redirect to home
    cart = [];
    appliedPromoCode = null;
    updateCartUI();
    window.location.hash = '#/';
}

// Product Modal
function openProductModal(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    // Populate modal content
    const mainImage = document.getElementById('product-main-image');
    const detailName = document.getElementById('product-detail-name');
    const detailBrand = document.getElementById('product-detail-brand');
    const detailRating = document.getElementById('product-detail-rating');
    const reviewCount = document.getElementById('product-detail-review-count');
    const detailPrice = document.getElementById('product-detail-price');
    const detailMrp = document.getElementById('product-detail-mrp');
    const detailDiscount = document.getElementById('product-detail-discount');
    
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }
    if (detailName) detailName.textContent = product.name;
    if (detailBrand) detailBrand.textContent = product.brand;
    if (detailRating) detailRating.innerHTML = generateStars(product.rating);
    if (reviewCount) reviewCount.textContent = `(${product.rating}) • ${product.reviews.length} reviews`;
    if (detailPrice) detailPrice.textContent = formatPrice(product.price);
    if (detailMrp) detailMrp.textContent = product.sale ? formatPrice(product.mrp) : '';
    if (detailDiscount) detailDiscount.textContent = product.sale ? `${product.discountPercent}% OFF` : '';
    
    // Set thumbnails (using same image for demo)
    const thumbnails = modal.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.src = product.image;
        thumb.alt = product.name;
    });
    
    // Condition badge
    const conditionElement = document.getElementById('product-detail-condition');
    if (conditionElement) {
        const conditionClass = product.condition === 'Used' ? 'clean-verified' : 'new-stock';
        const conditionText = product.condition === 'Used' ? '✓ Clean & Verified' : '✓ New (Dead Stock)';
        conditionElement.innerHTML = `<span class="condition-badge ${conditionClass}">${conditionText}</span>`;
    }
    
    // Countdown for sale items
    const countdownElement = document.getElementById('product-detail-countdown');
    if (countdownElement) {
        if (product.sale && product.saleEnd) {
            countdownElement.innerHTML = '<div class="sale-countdown"><strong>Sale ends in:</strong> <span id="product-countdown-timer"></span></div>';
            updateCountdown('product-countdown-timer', product.saleEnd);
        } else {
            countdownElement.innerHTML = '';
        }
    }
    
    // Reviews
    const reviewsElement = document.getElementById('product-detail-reviews');
    if (reviewsElement) {
        reviewsElement.innerHTML = `
            <h4 class="reviews-title">Customer Reviews</h4>
            ${product.reviews.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-author">${review.username}</span>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <div class="review-rating">${generateStars(review.rating)}</div>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join('')}
        `;
    }
    
    // Add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.onclick = () => {
            addToCart(productId);
            closeModal();
        };
    }
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

// Cart Functions
function addToCart(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'block' : 'none';
    }
    
    renderCartItems();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    
    if (!cartItemsContainer || !cartEmpty || !cartFooter) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartEmpty.classList.remove('hidden');
        cartFooter.classList.add('hidden');
        return;
    }
    
    cartEmpty.classList.add('hidden');
    cartFooter.classList.remove('hidden');
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item__image">
            <div class="cart-item__details">
                <div class="cart-item__name">${item.name}</div>
                <div class="cart-item__brand">${item.brand}</div>
                <div class="cart-item__price">${formatPrice(item.price)}</div>
                <div class="cart-item__controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const subtotalElement = document.getElementById('cart-subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }
}

function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('hidden');
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('hidden');
    }
}

// Return Policy Modal
function showReturnPolicy() {
    const modal = document.getElementById('return-policy-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Router
function router() {
    const hash = window.location.hash.slice(1) || '/';
    
    // Clear existing intervals
    countdownIntervals.forEach(interval => clearInterval(interval));
    countdownIntervals = [];
    
    // Stop carousel autoplay when leaving home
    if (carouselInterval && hash !== '/' && hash !== '/home') {
        clearInterval(carouselInterval);
    }
    
    switch (hash) {
        case '/':
        case '/home':
            showHome();
            break;
        case '/men':
            showCollection('men');
            break;
        case '/women':
            showCollection('women');
            break;
        case '/checkout':
            showCheckout();
            break;
        default:
            showHome();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Router
    window.addEventListener('hashchange', router);
    router();
    
    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }
    
    // Checkout button
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'checkout-btn') {
            e.preventDefault();
            closeCart();
            window.location.hash = '#/checkout';
        }
    });
    
    // Carousel controls
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    
    if (carouselPrev) carouselPrev.addEventListener('click', prevSlide);
    if (carouselNext) carouselNext.addEventListener('click', nextSlide);
    
    // Promo code functionality
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'apply-promo') {
            e.preventDefault();
            applyPromoCode();
        }
    });
    
    const promoInput = document.getElementById('promo-code');
    if (promoInput) {
        promoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyPromoCode();
            }
        });
    }
    
    // Place order button
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'place-order') {
            e.preventDefault();
            placeOrder();
        }
    });
    
    // Cart close buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-sidebar__close') || e.target.classList.contains('cart-sidebar__backdrop')) {
            closeCart();
        }
    });
    
    // Modal close buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal__backdrop')) {
            closeModal();
        }
    });
    
    // Filter inputs
    const priceFilter = document.getElementById('price-filter');
    const conditionFilter = document.getElementById('condition-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchFilter = document.getElementById('search-filter');
    
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (conditionFilter) conditionFilter.addEventListener('change', applyFilters);
    if (ratingFilter) ratingFilter.addEventListener('change', applyFilters);
    if (searchFilter) searchFilter.addEventListener('input', applyFilters);
    
    // Product card clicks
    document.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        if (productCard && !e.target.closest('button') && !e.target.closest('.product-card__overlay')) {
            const productId = parseInt(productCard.dataset.id);
            if (productId) {
                openProductModal(productId);
            }
        }
    });
    
    // Thumbnail clicks in product modal
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('thumbnail')) {
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            e.target.classList.add('active');
            const mainImage = document.getElementById('product-main-image');
            if (mainImage) {
                mainImage.src = e.target.src;
            }
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCart();
        }
    });
    
    // Initialize cart UI
    updateCartUI();
});

// Global functions for inline event handlers
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.showReturnPolicy = showReturnPolicy;
window.goToSlide = goToSlide;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.applyPromoCode = applyPromoCode;
window.placeOrder = placeOrder;
window.navigateToMen = navigateToMen;
window.navigateToWomen = navigateToWomen;
window.navigateToHome = navigateToHome;
