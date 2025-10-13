const propertyGroups = require("stylelint-config-recess-order/groups")

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-standard-scss",
  ],
  rules: {
    "order/properties-order": propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: "always",
      noEmptyLineBetween: true,
    })),
    "selector-class-pattern": null,
    "number-max-precision": 5,
    "declaration-no-important": true,
    "declaration-empty-line-before": null,
    "font-family-name-quotes": "always-where-required",
    "no-empty-source": null,
    "block-no-empty": null,
    "property-no-unknown": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"],
      },
    ],
  },
}
