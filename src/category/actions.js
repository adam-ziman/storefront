const fetch = window.fetch;

export const setProducts = (products)=> ({
  type: 'categories/set-products',
  products
});

const performProductFetch = async ()=> {
  const fetchURL = '../../public/products.json';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(fetchURL, options);
};

const loadJSON = (callback)=> {   

  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', '../../public/products.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = ()=> {
    if (xobj.readyState === 4 && xobj.status === '200') {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
};

export const getProducts = ()=> {
 loadJSON((response)=> {
  // Parse JSON string into object
    return JSON.parse(response);
 });
};
