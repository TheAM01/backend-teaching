import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');




const response = await fetch('http://localhost:2000/api/post/delete/686faba569ec379204005b27', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});

if (!response.ok) {
    throw new Error(`Failed to delete item: ${response.status}`);
}

const data = await response.json();
console.log('Deleted:', data);
