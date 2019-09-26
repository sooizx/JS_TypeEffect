var texts = ["網頁設計師", "插畫家", "遊戲開發者"];   // 陣列
var speed = 500;                                   // 打字速度
var index = 0;                                      // 編號
var count = 0;                                      // 字數
var id = "type-box";                                // 要寫入文字的 ID

// 定義方法
function type(){
    var box = document.getElementById(id);

    var slice = texts[index].slice(0, count++);
    
    box.innerHTML = slice;

    setTimeout(type,speed);

    if (count > texts[index].length+5) {
        count = 0;
        index++;
        
    }

    if (index == texts.length) {
        index = 0;
        
    }
        
    
}

// 當網頁載入完成時執行方法 type
document.addEventListener("DOMContentLoaded", type);