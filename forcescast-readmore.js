//<![CDATA[ 
// InArticles Related to Middle of Posts 
var bspostRelatedIn = new Array(); var bspostRelatedInNum = 0; var relatedUrls = new Array(); function related_results_labels(json) { for (var i = 0; i < json.feed.entry.length; i++) { var entry = json.feed.entry[i]; bspostRelatedIn[bspostRelatedInNum] = entry.title.$t; for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') {relatedUrls[bspostRelatedInNum] = entry.link[k].href; bspostRelatedInNum++; break;}}}} function removeRelatedDuplicates() { var tmp = new Array(0); var tmp2 = new Array(0); for(var i = 0; i < relatedUrls.length; i++) { if(!contains(tmp, relatedUrls[i])) { tmp.length += 1; tmp[tmp.length - 1] = relatedUrls[i]; tmp2.length += 1; tmp2[tmp2.length - 1] = bspostRelatedIn[i];}} bspostRelatedIn = tmp2; relatedUrls = tmp;} function contains(a, e) { for(var j = 0; j < a.length; j++) if (a[j]==e) return true; return false;} function printRelatedLabels() { var r = Math.floor((bspostRelatedIn.length - 1) * Math.random()); var i = 0; document.write('<ul>'); while (i < bspostRelatedIn.length && i < 3) { document.write('<li><a href="' + relatedUrls[r] + '">' + bspostRelatedIn[r] + '</a></li>'); if (r < bspostRelatedIn.length - 1) { r++; } else { r = 0;} i++;} document.write('</ul>');let element = document.createElement('a');element.href = 'https://www.bloggerspice.com/';element.pathname = 'embed' + element.pathname;console.log(element.toString());}//]]> 
