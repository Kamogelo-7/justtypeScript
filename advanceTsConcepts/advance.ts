interface Topic {
  title: string;
  description: string;
}

interface SubTopic extends Topic {
  ranking: string;
}

const info: SubTopic = {
  ranking: "⭐⭐⭐⭐",
  title: "Into the zone",
  description:
    "The movie was quite amazing the plot, writing, music, actors legite everything was on point well produced film of the decade 10/10 would highly recommand",
};
