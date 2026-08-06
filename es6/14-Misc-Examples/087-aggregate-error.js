const e=new AggregateError([new Error('a'),new Error('b')],'fail');document.getElementById('out').textContent=e.message+':'+e.errors.length;
