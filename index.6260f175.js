!function(){var t=0,e=setInterval((function(){t++,console.log("повiдомлення номер ".concat(t)),5===t&&(clearInterval(e),console.log("все"))}),1e3),n=document.getElementById("1"),o=document.getElementById("2"),a=document.getElementById("3"),c=document.getElementById("4");setInterval((function(){n.style.backgroundColor="rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")"),o.style.height="".concat(200*Math.random(),"px"),o.style.width="".concat(200*Math.random(),"px"),a.style.transform="translate(".concat(50*Math.random(),"px, ").concat(50*Math.random(),"px)"),c.style.transform="scale(".concat(1.3*Math.random(),")"),c.style.backgroundColor="rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")}),1e3);var r=document.querySelector(".score"),d=document.querySelector(".game_container"),m=0;setInterval((function(){var t;(t=document.createElement("div")).classList.add("target"),t.style.top="".concat(300*Math.random(),"px"),t.style.left="".concat(300*Math.random(),"px"),t.addEventListener("click",(function(){m++,r.textContent=m,t.remove()})),d.appendChild(t),setTimeout((function(){t.remove()}),1e3)}),1e3);var l=document.getElementById("4_input"),s=document.getElementById("startbtn"),u=document.getElementById("message");s.addEventListener("click",(function(){l.value<=0?u.textContent="введiть число бiльше 0":(u.textContent="таймер запущено",setTimeout((function(){u.textContent="час вицшов"}),1e3*l.value))}))}();
//# sourceMappingURL=index.6260f175.js.map
