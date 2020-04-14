$(document).ready(function () {

	/* 업로드 파일명 노출 */
	var uploadFile = $('.filebox #document_file');
	uploadFile.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).siblings('.file_name').val(filename);
	});
    
	/* 토론방만들기 가치수직선 버튼 클릭 시 상태 */
	$(".valueline_type button").click(function(){
		$(".valueline_type button").removeClass("c_on");
		$(this).toggleClass("c_on");
	});
    
    
});
