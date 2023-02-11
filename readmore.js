/*<![CDATA[*/
// (postBody)
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
