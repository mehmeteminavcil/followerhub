"use strict";
(self["webpackChunkapi"] = self["webpackChunkapi"] || []).push([[1167],{

/***/ 75266:
/***/ ((module) => {

module.exports = JSON.parse('{"BoundRoute.title":"라우트(bound route)","EditForm.inputSelect.description.role":"인증된 사용자에 선택한 역할(role)을 부여합니다.","EditForm.inputSelect.label.role":"인증된 사용자의 기본 역할(role)","EditForm.inputToggle.description.email":"사용자가 동일한 이메일 주소를 사용해 여러 계정을 만들지 못하게 합니다.","EditForm.inputToggle.description.email-confirmation":"(ON)이 활성화되면, 새로 가입하는 사용자는 인증 메일을 받게됩니다.","EditForm.inputToggle.description.email-confirmation-redirection":"이메일 인증완료 후 리다이렉트 될 주소","EditForm.inputToggle.description.email-reset-password":"애플리케이션의 비밀번호 재설정 URL 페이지","EditForm.inputToggle.description.sign-up":"비활성(OFF)일 경우, 등록 프로세스를 금지합니다. 사용하는 프로바이더(provider)에 관계 없이 누구도 가입할 수 없습니다.","EditForm.inputToggle.label.email":"이메일 주소 당 하나의 계정","EditForm.inputToggle.label.email-confirmation":"이메일 인증 활성화","EditForm.inputToggle.label.email-confirmation-redirection":"리다이렉션 url","EditForm.inputToggle.label.email-reset-password":"패스워드 재설정 페이지","EditForm.inputToggle.label.sign-up":"사용자 등록","EditForm.inputToggle.placeholder.email-confirmation-redirection":"예: https://yourfrontend.com/reset-password","EditForm.inputToggle.placeholder.email-reset-password":"예: https://yourfrontend.com/reset-password","EditPage.form.roles":"역할 상세정보","Email.template.data.loaded":"이메일 템플릿을 불러왔습니다.","Email.template.email_confirmation":"이메일 주소 확인","Email.template.form.edit.label":"템플릿 수정","Email.template.table.action.label":"action","Email.template.table.icon.label":"icon","Email.template.table.name.label":"name","Form.advancedSettings.data.loaded":"고급 설정 정보를 불러왔습니다.","HeaderNav.link.advancedSettings":"고급 설정","HeaderNav.link.emailTemplates":"이메일 템플릿","HeaderNav.link.providers":"프로바이더(Providers)","Plugin.permissions.plugins.description":"{name} 플러그인에서 허용할 액션을 설정합니다.","Plugins.header.description":"라우트(route)에 연결된 액션만 표시됩니다.","Plugins.header.title":"권한(Permissions)","Policies.header.hint":"애플리케이션 또는 플러그인을 선택하고 항목을 클릭하면 바인딩 된 경로를 표시할 수 있습니다.","Policies.header.title":"고급 설정","PopUpForm.Email.email_templates.inputDescription":"이메일 템플릿 문법은 이 {link}를 확인하세요.","PopUpForm.Email.link.documentation":"check out our documentation.","PopUpForm.Email.options.from.email.label":"보내는 이메일","PopUpForm.Email.options.from.email.placeholder":"kai@doe.com","PopUpForm.Email.options.from.name.label":"보내는 사람","PopUpForm.Email.options.from.name.placeholder":"Kai Doe","PopUpForm.Email.options.message.label":"내용","PopUpForm.Email.options.object.label":"제목","PopUpForm.Email.options.object.placeholder":"Please confirm your email address for %APP_NAME%","PopUpForm.Email.options.response_email.label":"응답받을 이메일","PopUpForm.Email.options.response_email.placeholder":"kai@doe.com","PopUpForm.Providers.enabled.description":"사용하지 않을 경우 이 프로바이더(provider) 기능을 이용할 수 없습니다.","PopUpForm.Providers.enabled.label":"사용","PopUpForm.Providers.key.label":"클라이언트 ID(Client ID)","PopUpForm.Providers.key.placeholder":"텍스트","PopUpForm.Providers.redirectURL.front-end.label":"프론트엔드 애플리케이션 리다이렉트 URL","PopUpForm.Providers.redirectURL.label":"{provider} 애플리케이션 구성에 추가할 리디렉션 URL","PopUpForm.Providers.secret.label":"클라이언트 시크릿(Client Secret)","PopUpForm.Providers.secret.placeholder":"텍스트","PopUpForm.Providers.subdomain.label":"Host URI (Subdomain)","PopUpForm.Providers.subdomain.placeholder":"my.subdomain.com","PopUpForm.header.edit.email-templates":"이메일 템플릿 수정","PopUpForm.header.edit.providers":"프로바이더 수정","Providers.data.loaded":"프로바이더를 불러왔습니다.","Providers.status":"상태","Roles.empty":"아직 역할이 없습니다.","Roles.empty.search":"검색과 일치하는 역할이 없습니다.","Settings.roles.deleted":"Role deleted","Settings.roles.edited":"Role edited","Settings.section-label":"사용자 & 권한 플러그인","components.Input.error.validation.email":"유효하지 않은 이메일입니다.","components.Input.error.validation.json":"JSON 형식과 일치하지 않습니다.","components.Input.error.validation.max":"값이 너무 큽니다.","components.Input.error.validation.maxLength":"값이 너무 깁니다.","components.Input.error.validation.min":"값이 너무 작습니다.","components.Input.error.validation.minLength":"값이 너무 짧습니다.","components.Input.error.validation.minSupMax":"이보다 클 수 없습니다.","components.Input.error.validation.regex":"값이 정규식과 일치하지 않습니다.","components.Input.error.validation.required":"필수 항목입니다.","components.Input.error.validation.unique":"이 값은 이미 사용되고 있습니다.","notification.success.submit":"설정을 업데이트했습니다.","page.title":"설정 - 역할","plugin.description.long":"JWT 기반의 인증 프로세스로 API를 보호하세요. 이 플러그인에서 사용자 그룹간 권한을 관리할 수 있는 ACL 전략도 설정할 수 있습니다.","plugin.description.short":"JWT 기반의 인증 프로세스로 API를 보호하세요.","plugin.name":"역할(roles) & 권한(permissions)","popUpWarning.button.cancel":"취소","popUpWarning.button.confirm":"확인","popUpWarning.title":"Please confirm","popUpWarning.warning.cancel":"수정 사항을 취소하시겠습니까?"}');

/***/ })

}]);