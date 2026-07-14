try{
(()=>{var t=new MutationObserver(()=>{let o=[...document.querySelectorAll(".rejt-tree > .rejt-object-node > span")],s=[...[...document.querySelectorAll(".rejt-tree > .rejt-array-node > span")],...o];for(let e of s)e.className!=="closed"&&e.click(),e.className="closed"});t.observe(document.body,{childList:!0,subtree:!0});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
