jQuery(function() {
	
	if(jQuery('.sn-scm-fixtures-table-filter').size() > 0) {
		
		jQuery('.sn-scm-fixture-table').hide();
		jQuery('.sn-scm-fixture-table').eq(0).show();
		
		jQuery('.sn-scm-fixtures-table-filter select').change(function() {
			jQuery('.sn-scm-fixture-table').hide();
			jQuery('.sn-scm-fixture-table#team-'+jQuery(this).val()).show();
		});
		
	}
	
	if(jQuery('.sn-scm-players-filter').size() > 0) {
		
		jQuery('.sn-sports-club-players').hide();
		jQuery('.sn-sports-club-players').eq(0).show();
		
		jQuery('.sn-scm-players-filter select').change(function() {
			jQuery('.sn-sports-club-players').hide();
			jQuery('.sn-sports-club-players#team-'+jQuery(this).val()).show();
		});
		
	}
	
});