/* 串`最新消息`api 產生列表 */
(function() {
  new Vue({
    el: ".news_main",
    data: {
      list: []
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        axios({
          method: "get",
          url: "https://derway.tw/admin/api/news"
        })
          .then(res => {
            var array = res.data.data.length > 0 ? res.data.data : [];
            this.list = [];
            array.forEach(obj => {
              this.list.push({
                id: obj.id,
                date: obj.date,
                title: obj.title,
                href: `article.html?id=${obj.id}`
              });
            });
          })
          .catch(err => {
            alert("最新消息列表取得失敗！");
          });
      }
    }
  });
})();
