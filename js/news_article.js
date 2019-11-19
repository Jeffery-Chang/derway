/* 串`最新消息內頁`api 設置內容 */
(function() {
  new Vue({
    el: ".news_main",
    data: {
      article: {
        title: "",
        date: "",
        content: ""
      }
    },
    created() {
      if (!this.getQueryParams().id) {
        alert("找不到該則消息！");
        location.href = "index.html";
        return;
      }
      this.getList();
    },
    methods: {
      getQueryParams(qs) {
        var paramStr = qs || location.search;
        paramStr = paramStr.split("+").join(" ");
        var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;
        while ((tokens = re.exec(paramStr))) {
          params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
      },
      getList() {
        axios({
          method: "get",
          url: `https://derway.tw/admin/api/news/${this.getQueryParams().id}`
        })
          .then(res => {
            this.article = res.data.data;
          })
          .catch(err => {
            alert("最新消息資料取得失敗！");
          });
      }
    }
  });
})();
