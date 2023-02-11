/*<![CDATA[*/
// (postBody) sesuaikan dengan kode di template kalian, biasanya dapat di lihat pebungkus kode ini <data:post.body/> contoh <div class='postBody'><data:post.body/></div>
!function() {
    let c = document.querySelector("#postTextRelated");
    if (c) {
        let a = document.querySelectorAll(".postBody p"),
            b = parseInt(a.length / 2);
        if (a.length > 0) {
        c.style.display = 'block';
        "P" == a[b].nodeName ? a[b].parentNode.insertBefore(c, a[b]) : a[b].parentNode.insertBefore(c, a[b].nextSibling)
    }
}
}()
/*]]>*/
