let list1 = ['1','2','3','4','5','6','7','8','9','0'];
let list2 = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let list3 = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let list4 = ['!','@','#','$','%','^','&','*','_','-','=','+','?'];
let results = [];

length = Math.floor(Math.random()*6)+10;

    
c_n = list1[Math.floor(Math.random()*list1.length)];

c_s = list2[Math.floor(Math.random()*list2.length)];

c_l = list3[Math.floor(Math.random()*list3.length)];

c_c = list4[Math.floor(Math.random()*list4.length)];
st = [];

var c_n_p;
var c_s_p;
var c_l_p;
var c_c_p;

function c_s_p_d(){
    c_s_p = Math.floor(Math.random()*st.length);
    if(c_s_p == c_n_p){
        c_s_p_d();
    }
    return c_s_p;
}

function c_l_p_d(){
    c_l_p = Math.floor(Math.random()*st.length);
    if (c_l_p == c_n_p){
        c_l_p_d();
    }  
    if (c_l_p == c_s_p){
        c_l_p_d();
    }  
    return c_l_p;
}

function c_c_p_d(){
    c_c_p = Math.floor(Math.random()*st.length);
    if (c_c_p == c_n_p){
        c_c_p_d();
    }
    if (c_c_p == c_s_p){
        c_c_p_d();
    }
    if (c_c_p == c_l_p){
        c_c_p_d();
    }   
    return c_c_p;
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      document.getElementById("snackbar").className = "show";
      setTimeout(function(){ document.getElementById("snackbar").className = document.getElementById("snackbar").className.replace("show", ""); }, 1000);
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
      window.alert("Error : Could not copy password to clipboard!");
    });
}



function generate(){
    results = [];

    length = Math.floor(Math.random()*6)+10;

        
    c_n = list1[Math.floor(Math.random()*list1.length)];

    c_s = list2[Math.floor(Math.random()*list2.length)];

    c_l = list3[Math.floor(Math.random()*list3.length)];

    c_c = list4[Math.floor(Math.random()*list4.length)];
    st = [];

    for(i=0;i<length;i++){
        x = Math.floor(Math.random()*11)+1;
        if(x == 1 || x==5 || x==11){
            st.push(list1[Math.floor(Math.random()*list1.length)]);
        }
        else if(x == 2 || x==7 || x==6 || x==10){
            st.push(list2[Math.floor(Math.random()*list2.length)]);
        }
        else if(x == 3 || x==8 || x==9){
            st.push(list3[Math.floor(Math.random()*list3.length)]);
        }
        else if(x == 4){
            st.push(list4[Math.floor(Math.random()*list4.length)]);
        }
    }

    c_n_p = Math.floor(Math.random()*st.length);

    c_s_p = c_s_p_d();


    c_l_p = c_l_p_d();

    
    c_c_p = c_c_p_d();

    st[c_n_p] = c_n;
    st[c_s_p] = c_s;
    st[c_l_p] = c_l;
    st[c_c_p] = c_c;

    pw = '';

    for(i=0;i<st.length;i++){
        pw = pw + st[i];
    }

    console.log(pw);
    document.getElementById("display").value = pw;
    copyTextToClipboard(pw);
}

    
    
