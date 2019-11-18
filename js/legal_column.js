/* 串`法律專欄`api 產生列表 */
(function() {
  new Vue({
    el: ".column_main",
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
          url: "https://derway.tw/admin/api/legal"
        })
          .then(res => {
            var array = res.data.data.length > 0 ? res.data.data : [];
            this.list = [];
            array.forEach(obj => {
              this.list.push({
                id: obj.id,
                date: obj.date,
                title: obj.title,
                btn: obj.link_title,
                href: obj.link_content
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
