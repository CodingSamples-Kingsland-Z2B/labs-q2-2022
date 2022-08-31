(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"col-md-4\">\r\n			<div class=\"card text-white bg-primary\">\r\n				<div class=\"card-body\">\r\n					<blockquote class=\"card-blockquote\">\r\n						<img height=\"200px\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imageUrl") || (depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":14,"column":31},"end":{"line":14,"column":43}}}) : helper)))
    + "\" />\r\n						<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":9},"end":{"line":15,"column":24}}}) : helper)))
    + "</p>\r\n						<footer>\r\n							Someone famous in\r\n							<cite title=\"Source Title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":18,"column":34},"end":{"line":18,"column":42}}}) : helper)))
    + "</cite>\r\n						</footer>\r\n						<div class=\"pull-right\">\r\n							<a href=\"#furniture/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":21,"column":27},"end":{"line":21,"column":33}}}) : helper)))
    + "\" class=\"btn btn-info\">Details</a>\r\n							<a href=\"#delete/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":30}}}) : helper)))
    + "\" class=\"btn btn-danger\">Delete Item</a>\r\n						</div>\r\n					</blockquote>\r\n				</div>\r\n			</div>\r\n		</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n	<div class=\"row space-top\">\r\n		<div class=\"col-md-12\">\r\n			<h1>Profile Page</h1>\r\n			<p>Listing your furniture.</p>\r\n		</div>\r\n	</div>\r\n	<div class=\"row space-top\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"furniture") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
})();