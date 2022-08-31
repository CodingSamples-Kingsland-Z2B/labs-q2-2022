(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['furniture'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\r\n	<div class=\"row space-top\">\r\n		<div class=\"col-md-12\">\r\n			<h1>Furniture Details</h1>\r\n		</div>\r\n	</div>\r\n	<div class=\"row space-top\">\r\n		<div class=\"col-md-4\">\r\n			<div class=\"card text-white bg-primary\">\r\n				<div class=\"card-body\">\r\n					<blockquote class=\"card-blockquote\">\r\n						<img height=\"200px\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imageUrl") || (depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":43}}}) : helper)))
    + "\" />\r\n					</blockquote>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"col-md-4\">\r\n			<p>Make: "
    + alias4(((helper = (helper = lookupProperty(helpers,"make") || (depth0 != null ? lookupProperty(depth0,"make") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"make","hash":{},"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":20}}}) : helper)))
    + "</p>\r\n			<p>Model: "
    + alias4(((helper = (helper = lookupProperty(helpers,"model") || (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"model","hash":{},"data":data,"loc":{"start":{"line":19,"column":13},"end":{"line":19,"column":22}}}) : helper)))
    + "</p>\r\n			<p>Year: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":20}}}) : helper)))
    + "</p>\r\n			<p>Description: "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":34}}}) : helper)))
    + "</p>\r\n			<p>Price: "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":22,"column":13},"end":{"line":22,"column":22}}}) : helper)))
    + "</p>\r\n			<p>Material: "
    + alias4(((helper = (helper = lookupProperty(helpers,"material") || (depth0 != null ? lookupProperty(depth0,"material") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"material","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":28}}}) : helper)))
    + "</p>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
})();