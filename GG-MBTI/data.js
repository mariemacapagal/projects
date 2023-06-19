const artists = [
    ["IU", "INFJ", "Soloist", "https://i.pinimg.com/564x/3d/41/38/3d4138206c1a0fae09fea44c74715734.jpg"],

    ["Irene", "ISFJ", "Red Velvet", "https://i.pinimg.com/564x/56/5a/53/565a53c05d82ea9d426af5f27cc6bfb8.jpg"],

    ["Seulgi", "ISFP", "Red Velvet", "https://i.pinimg.com/564x/53/ad/c9/53adc96550f19db73af65f426be2e0af.jpg"],

    ["Wendy", "ESFP", "Red Velvet", "https://i.pinimg.com/564x/53/48/ab/5348ab3d520a83610f20a6d33e380a9a.jpg"],

    ["Joy", "INTP", "Red Velvet", "https://i.pinimg.com/564x/34/83/a4/3483a41a052c2d33bdc0094fa43baa3c.jpg"],

    ["Yeri", "INFP", "Red Velvet", "https://i.pinimg.com/564x/03/f7/6c/03f76c1c72dc6ac62a35051a3c61ee19.jpg"],

    ["Jisoo", "ISTP", "Blackpink", "https://i.pinimg.com/564x/30/75/e6/3075e60c012efb79af7dcd6318af4a34.jpg"],

    ["Jennie", "INFP", "Blackpink", "https://i.pinimg.com/564x/24/05/d6/2405d65844d7748ad5be447c6c06fa7d.jpg"],

    ["Rosé", "ENFP", "Blackpink", "https://i.pinimg.com/564x/41/c3/8a/41c38a03ccfee61f4d440e4c54b8c4bb.jpg"],

    ["Lisa", "ISFP", "Blackpink", "https://i.pinimg.com/564x/7c/f5/a4/7cf5a43078b7d6251c558af8efe5e270.jpg"],

    ["Karina", "ENFP", "aespa", "https://i.pinimg.com/564x/cb/82/d9/cb82d9a050769cdeef861061121ab86c.jpg"],

    ["Giselle", "INFP", "aespa", "https://i.pinimg.com/564x/88/48/36/8848367839339a5ac02097e0ccf3d3f1.jpg"],

    ["Winter", "ISFJ", "aespa", "https://i.pinimg.com/564x/f4/02/45/f402457681c5d9bf24efa4331f7b1e5a.jpg"],

    ["Ningning", "INFP", "aespa", "https://i.pinimg.com/564x/d4/f1/d8/d4f1d8b364c28b0bbf7e485732914604.jpg"],

    ["Gaeul", "ISTJ", "IVE", "https://i.pinimg.com/564x/e0/e2/53/e0e25356c75ebb4137ceed617780b630.jpg"],

    ["Yujin", "ISTP", "IVE", "https://i.pinimg.com/564x/eb/7b/03/eb7b031d90cb359a97695fb5b0fc0770.jpg"],

    ["Rei", "INFJ", "IVE", "https://i.pinimg.com/564x/3a/5f/02/3a5f023e260771264153d7f7f0396fb2.jpg"],

    ["Wonyoung", "INNISFREE", "IVE", "https://i.pinimg.com/564x/98/b3/4d/98b34d04a935167ff039801e3a394ae4.jpg"],

    ["Liz", "INFP", "IVE", "https://i.pinimg.com/564x/1b/f0/aa/1bf0aa8d2fd1db238d4464ae5504f9dd.jpg"],

    ["Leeseo", "ENFP", "IVE", "https://i.pinimg.com/564x/a8/8c/8d/a88c8d9d17d147d1e0acfc1621297951.jpg"],

    ["Sakura", "INTP", "LE SSERAFIM", "https://i.pinimg.com/564x/59/11/e6/5911e67200501bccc24114daa0026ece.jpg"],

    ["Chaewon", "ISTP", "LE SSERAFIM", "https://i.pinimg.com/564x/c4/bc/b5/c4bcb5a95b73426b800f2424afd97bc2.jpg"],

    ["Yunjin", "INFJ", "LE SSERAFIM", "https://i.pinimg.com/564x/f9/c6/46/f9c6464c38227d1459460e4941ede0d7.jpg"],

    ["Kazuha", "ENFP", "LE SSERAFIM", "https://i.pinimg.com/564x/0f/02/ae/0f02ae1ad78cff364e5791ba568cf4c2.jpg"],

    ["Eunchae", "ISFP", "LE SSERAFIM", "https://i.pinimg.com/564x/fb/e4/b8/fbe4b8f7c0d45d872798ecceb2503f38.jpg"],

    ["Sumin", "ISFJ", "STAYC", "https://i.pinimg.com/564x/53/00/3b/53003b706236b347cd4c21392c220fbb.jpg"],

    ["Sieun", "ENFJ", "STAYC", "https://i.pinimg.com/564x/e5/11/7d/e5117d43d9301702032ffa2f1aa7942e.jpg"],

    ["Isa", "ESFJ", "STAYC", "https://i.pinimg.com/564x/2a/f1/58/2af158a3183a4634e3da51cdbaae5f1e.jpg"],

    ["Seeun", "INFP", "STAYC", "https://i.pinimg.com/564x/34/ad/bf/34adbfa520fec54e6db0119c9a3d8743.jpg"],

    ["Yoon", "ENFP", "STAYC", "https://i.pinimg.com/736x/ef/2a/b8/ef2ab80660742eeb432bbeeefc1651a4.jpg"],

    ["J", "INFJ", "STAYC", "https://i.pinimg.com/564x/6b/dc/5d/6bdc5dc2279820586f70761b9e7e5e01.jpg"],

    ["Yeji", "ESFJ", "ITZY", "https://i.pinimg.com/564x/4c/e0/5f/4ce05f569b1591d3775641df75763998.jpg"],

    ["Lia", "ENFJ", "ITZY", "https://i.pinimg.com/564x/b0/91/34/b09134b73b10c6b5d8d209215c1e83a4.jpg"],

    ["Ryujin", "INTJ", "ITZY", "https://i.pinimg.com/564x/c8/1c/6e/c81c6e73aeeac37c82817607ad35a89f.jpg"],

    ["Chaeryeong", "ISFJ", "ITZY", "https://i.pinimg.com/564x/b0/8a/e1/b08ae17e09a26a42efec772fc58306fb.jpg"],

    ["Yuna", "ENFP", "ITZY", "https://i.pinimg.com/564x/6b/1a/55/6b1a5595bce1ba7ee8e0ba5c05fcb082.jpg"],

]