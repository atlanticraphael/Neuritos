<div class="section-title">
	<div class="col-md-12">
		<h4 class="demo-title ">
			Turma : ${team.name}
		</h4>
	</div>
</div>
<div class="row">
	<g:each in="${team.listUser}" var="user" status="index">
		<div class="col-md-4">
			<div class="hfeat hfeat-sm">
				<i class="icon fa fa-user"></i> <a class="title">
					${name}
				</a>
				<p class="text">
					${email}
				</p>
			</div>
		</div>
	</g:each>
</div>
