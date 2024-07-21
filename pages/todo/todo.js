
// pages/example/example.js
Page({

  /**
   * Page initial data
   */
  data: {
    taskList:[{
      id: 1,
      title: 'example',
      checked: false,
    }],
    inputText:  '',
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },

  onBindInputTask(e) {
    const text = e.detail.value;
    this.setData({
      inputText: text
    })
  },

  onChangeChecked(e) {
    const id = e.currentTarget.dataset.id;
    const tasks = this.data.taskList;
    const task = tasks.find((task) => {
      return task.id === id;
    })
    if (task) {
      task.checked = !task.checked
      this.setData({
        taskList: Array.from(tasks)
      })
    }
  },

  onSubmitTask() {
    const text = this.data.inputText;
    const tasks = this.data.taskList;
    let lastItemId = -1;
    if (this.data.taskList.length > 0) {
      lastItemId = this.data.taskList[this.data.taskList.length - 1].id;
    }
    tasks.push({
      id: lastItemId + 1,
      checked: false,
      title: text
    })
    this.setData({
      inputText: '',
      taskList: Array.from(tasks)
    })
  },

  onDeleteTask(e) {
    const tasks = this.data.taskList.filter(task => task.id !== e.currentTarget.dataset.id);
    this.setData({
      taskList: Array.from(tasks)
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },
})
