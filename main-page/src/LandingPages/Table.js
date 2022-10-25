import React from "react";

export default function Table() {
	return (
		<div>
			<table class="table table-striped">
				<tr>
					<th>S.No</th>
					<th>Name</th>
					<th>Page</th>
				</tr>
				{/* Add Details and link to your page */}
				<tr>
					<td>1</td>
					<td>ImgGallery</td>
					<td>
						<a href="/HTML_CSS/ImgGallery/Website.html">ImgGallery</a>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
	);
}
