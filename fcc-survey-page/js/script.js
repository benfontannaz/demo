// 
// eslint-disable-next-line no-unused-vars
const projectName = 'survey-form';

/* $("input:checkbox").click(function() {
 var bol = $("input:checkbox:checked").length >= 3;     
 $("input:checkbox").not(":checked").attr("disabled",bol);
 }); */

/* var limit = 3;
      $('.input-checkbox').on('click', function(evt) {
        index = $(this).parent('td').parent('tr').index();
        if ($('.input-checkbox:checked').length >= limit) {
          $('.input-checkbox').eq(localStorage.getItem('last-checked-item')).removeAttr('checked');
          //this.checked = false;
        }
        localStorage.setItem('last-checked-item', index);
      }); */

    let maxCheckedArray = [];
    let assessmentOptions = jQuery('.basket-moves').find('input[type="checkbox"]');
    assessmentOptions.on('change', function() {
        let checked = jQuery(this).prop('checked');
        if(checked) {
            maxCheckedArray.push(jQuery(this));
        }
        if(maxCheckedArray.length >= 4) {
            let old_item = maxCheckedArray.shift();
            old_item.prop('checked', false);
        }
    });