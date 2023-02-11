var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];
    var autoRelatedConfig = {
      homePage: &quot;<data:blog.homepageUrl.canonical/>&quot;,
      numPosts: 10,
      titleLength:&quot;auto&quot;,
      newTabLink: false,
      callBack:function(){}
    }
