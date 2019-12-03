/* 串`最新消息`api 產生列表 */
(function() {
  new Vue({
    el: ".index_main",
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
            array.forEach((obj, key) => {
              if (key > 2) return;
              this.list.push({
                id: obj.id,
                year: new Date(obj.date).getFullYear(),
                date: () => {
                  var month = new Date(obj.date).getMonth() + 1;
                  var day = new Date(obj.date).getDate();

                  function fillZero(num) {
                    return num < 10 ? `0${num}` : num;
                  }

                  return `${fillZero(month)}/${fillZero(day)}`;
                },
                title: obj.title,
                href: `article.html?id=${obj.id}`,
                delay: `${0.2 * key}s`
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
