const e=new Error('outer',{cause:new Error('inner')});document.getElementById('out').textContent=e.message+' <- '+e.cause.message;
