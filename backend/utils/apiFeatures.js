class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  groupByRole() {
    if (this.queryString.groupByRole) {
      this.query = this.query.aggregate([
        {
          $group: {
            _id: "$role",
            agents: { $push: "$$ROOT" },
          },
        },
      ]);
    }
    return this;
  }
}
module.exports = APIFeatures;
