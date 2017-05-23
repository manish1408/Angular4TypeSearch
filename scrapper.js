function loadIframe() {
  var tbx_val = 'http://52.166.75.236/api/adminsettings/pagesource?Url=' + $('#scanPage').val();
   $('#frame').attr('src', tbx_val);
   checkIframeLoaded();
}

function checkIframeLoaded() {
    // Get a handle to the iframe element
    var iframe = document.getElementById('frame');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Check if loading is complete
    if (  iframeDoc.readyState  == 'complete' ) {
        //iframe.contentWindow.alert("Hello");
        iframe.contentWindow.onload = function(){
            console.log("I am loaded");
        };
        // The loading is complete, call the function we want executed once the iframe is loaded
        window.setTimeout(function(){
           scrapFrame();
        },4000)
       
        return;
    } 

    // If we are here, it is not loaded. Set things up so we check   the status again in 100 milliseconds
    window.setTimeout('checkIframeLoaded();', 100);
}


    

function scrapFrame() {
  var ifr = document.getElementsByTagName('iframe')[0];
  var ifrDoc = ifr.contentDocument || ifr.contentWindow.document;
  var theForm = ifrDoc.getElementsByTagName('form');
  var theButton = ifrDoc.getElementsByTagName('button');
  console.log(theForm);
  
var tableResult = '<table id="datatable-responsive" class="table table-striped table-bordered responsive no-wrap dataTable dtr-inline" cellspacing="0" ';
tableResult += 'width="100%" role="grid" aria-describedby="datatable-responsive_info" style="width: 100%;">' ;
tableResult += '<thead><tr role="row"><th class="sorting_asc">Active</th><th class="sorting">Page</th><th class="sorting">Description</th><th class="sorting">Type</th><th class="sorting">Banner</th><th class="sorting">When</th></tr></thead>';
  for (var index = 0; index < theForm.length; index++) {
    var em = theForm[index];
    var desc = 'Form with'
    tableResult += '<tr role="row" class="odd"><td><input type="checkbox"></input> </td>';
    tableResult += '<td>' + em.baseURI + '</td>';
    // For Description 
    if (em.id !== "") {
      desc += ' Id= ' + em.id
    } else if (em.className !== "") {
       desc += ' ClassName= ' + em.className
    } else if (em.name !== "") {
       desc += ' Name= ' + em.name
    }
    tableResult += '<td>' + desc + '</td>';
    tableResult += '<td> Form </td>';
    tableResult += '<td><a>Banner 1<a></td>';
    tableResult += '<td><a>On Click<a></td>';
    tableResult += '</tr>';
  }
  
  for (var index = 0; index < theButton.length; index++) {
    var em = theButton[index];
    var desc = 'Button with'
    tableResult += '<tr role="row" class="odd"><td><input type="checkbox"></input> </td>';
    tableResult += '<td>' + em.baseURI + '</td>';
    // For Description 
    if (em.id !== "") {
      desc += ' Id= ' + em.id
    } else if (em.className !== "") {
       desc += ' ClassName= ' + em.className
    } else if (em.name !== "") {
       desc += ' Name= ' + em.name
    }
    tableResult += '<td>' + desc + '</td>';
    tableResult += '<td> Button </td>';
    tableResult += '<td><a>Banner 1<a></td>';
    tableResult += '<td><a>On Click<a></td>';
    tableResult += '</tr>';
  }
tableResult += '</table>';
 $('#result').html(tableResult);
}