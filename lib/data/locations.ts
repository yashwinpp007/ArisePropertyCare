export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  region: string;
  intro: string;
  landmarks: string[];
  nearbySlugs: string[];
  isHub?: boolean;
  isHQ?: boolean;
}

export const primaryLocation = {
  name: "Sydney",
  slug: "sydney",
};

export const suburbs: Suburb[] = [
  {
    slug: "sydney",
    name: "Sydney",
    postcode: "2000",
    region: "Greater Sydney",
    intro:
      "Based in Seven Hills, Arise Property Care is Sydney's dedicated cleaning partner, servicing homes, offices, strata buildings and construction sites right across the Sydney metro — from the CBD and Inner West to the Northern Beaches, Sutherland Shire and every growth corridor in between.",
    landmarks: ["Sydney CBD", "Inner West", "Eastern Suburbs", "North Shore", "Northern Beaches", "Western Sydney", "The Hills District", "Sutherland Shire"],
    nearbySlugs: ["seven-hills", "parramatta", "blacktown", "castle-hill"],
    isHub: true,
  },
  {
    slug: "parramatta",
    name: "Parramatta",
    postcode: "2150",
    region: "Greater Western Sydney",
    intro:
      "As Sydney's second CBD, Parramatta's mix of high-rise apartments, corporate offices and heritage homes calls for a cleaning partner who can move between commercial towers and family residences with equal care.",
    landmarks: ["Parramatta CBD", "Westfield Parramatta", "Parramatta Park", "Church Street precinct"],
    nearbySlugs: ["harris-park", "westmead", "wentworthville", "merrylands"],
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    postcode: "2148",
    region: "Greater Western Sydney",
    intro:
      "Blacktown's fast-growing residential and commercial precincts rely on Arise Property Care for everything from weekly house cleans to retail and office contracts across the LGA.",
    landmarks: ["Westpoint Blacktown", "Blacktown Hospital precinct", "Blacktown Showground"],
    nearbySlugs: ["seven-hills", "prospect", "rooty-hill", "greystanes"],
  },
  {
    slug: "wentworthville",
    name: "Wentworthville",
    postcode: "2145",
    region: "Greater Western Sydney",
    intro:
      "From federation homes to modern townhouse developments, Wentworthville households and small businesses trust Arise Property Care for dependable, recurring cleaning services.",
    landmarks: ["Wentworthville Station precinct", "Dan Mahoney Reserve"],
    nearbySlugs: ["westmead", "pendle-hill", "parramatta", "greystanes"],
  },
  {
    slug: "pendle-hill",
    name: "Pendle Hill",
    postcode: "2145",
    region: "Greater Western Sydney",
    intro:
      "We provide residential and end of lease cleaning throughout Pendle Hill's established family neighbourhoods, with flexible scheduling for busy households.",
    landmarks: ["Pendle Hill Station", "Robin Thomas Reserve"],
    nearbySlugs: ["wentworthville", "greystanes", "seven-hills", "westmead"],
  },
  {
    slug: "seven-hills",
    name: "Seven Hills",
    postcode: "2147",
    region: "Greater Western Sydney",
    intro:
      "Seven Hills is home to the Arise Property Care base at 1/169 Cornelia Road — making it one of our fastest-served suburbs for residential, commercial, builders and end of lease cleaning.",
    landmarks: ["Seven Hills Industrial Estate", "Kelso Park", "Seven Hills Station"],
    nearbySlugs: ["blacktown", "prospect", "pendle-hill", "wentworthville"],
    isHQ: true,
  },
  {
    slug: "castle-hill",
    name: "Castle Hill",
    postcode: "2154",
    region: "The Hills District",
    intro:
      "In the Hills District's premium residential and retail heartland, Arise Property Care delivers a premium-standard clean to match Castle Hill's high-end homes and commercial fit-outs.",
    landmarks: ["Castle Towers", "Castle Hill Metro precinct", "Fred Caterson Reserve"],
    nearbySlugs: ["baulkham-hills", "norwest", "bella-vista", "sydney"],
  },
  {
    slug: "baulkham-hills",
    name: "Baulkham Hills",
    postcode: "2153",
    region: "The Hills District",
    intro:
      "Baulkham Hills' large family homes and established gardens are well suited to our recurring residential cleaning and seasonal deep clean packages.",
    landmarks: ["Stockland Baulkham Hills", "Bidjigal Reserve"],
    nearbySlugs: ["castle-hill", "norwest", "bella-vista", "seven-hills"],
  },
  {
    slug: "norwest",
    name: "Norwest",
    postcode: "2153",
    region: "The Hills District",
    intro:
      "Norwest Business Park's corporate campuses and surrounding residential developments are serviced by our commercial and office cleaning teams on scheduled contracts.",
    landmarks: ["Norwest Business Park", "Norwest Marketown"],
    nearbySlugs: ["bella-vista", "castle-hill", "baulkham-hills", "sydney"],
  },
  {
    slug: "bella-vista",
    name: "Bella Vista",
    postcode: "2153",
    region: "The Hills District",
    intro:
      "From executive homes to Bella Vista's corporate office precinct, we provide both residential and commercial cleaning services tailored to this fast-growing Hills District suburb.",
    landmarks: ["Bella Vista Farm Park", "Norwest Metro Station"],
    nearbySlugs: ["norwest", "castle-hill", "baulkham-hills", "sydney"],
  },
  {
    slug: "harris-park",
    name: "Harris Park",
    postcode: "2150",
    region: "Greater Western Sydney",
    intro:
      "Harris Park's dense apartment living and busy dining strip make reliable strata and residential cleaning essential — it's a core part of our Parramatta-area coverage.",
    landmarks: ["Harris Park Dining Precinct", "Rosella Reserve"],
    nearbySlugs: ["parramatta", "westmead", "merrylands", "guildford"],
  },
  {
    slug: "westmead",
    name: "Westmead",
    postcode: "2145",
    region: "Greater Western Sydney",
    intro:
      "Home to Sydney's largest medical precinct, Westmead is where our medical centre and allied health cleaning expertise is most in demand, alongside residential services for the local community.",
    landmarks: ["Westmead Hospital Precinct", "Westmead Children's Hospital"],
    nearbySlugs: ["parramatta", "wentworthville", "harris-park", "pendle-hill"],
  },
  {
    slug: "greystanes",
    name: "Greystanes",
    postcode: "2145",
    region: "Greater Western Sydney",
    intro:
      "Greystanes' family-friendly streets and growing number of townhouse developments keep our residential and end of lease cleaning teams busy throughout the suburb.",
    landmarks: ["Greystanes Shopping Centre", "Cumberland State Forest"],
    nearbySlugs: ["pendle-hill", "wentworthville", "merrylands", "prospect"],
  },
  {
    slug: "merrylands",
    name: "Merrylands",
    postcode: "2160",
    region: "Greater Western Sydney",
    intro:
      "Merrylands' mix of apartments, family homes and a busy retail centre makes it one of our most active suburbs for residential and end of lease cleaning bookings.",
    landmarks: ["Stockland Merrylands", "Merrylands Park"],
    nearbySlugs: ["guildford", "greystanes", "harris-park", "parramatta"],
  },
  {
    slug: "guildford",
    name: "Guildford",
    postcode: "2161",
    region: "Greater Western Sydney",
    intro:
      "Guildford's established residential streets and proximity to light industry make it a natural fit for both our home cleaning and commercial cleaning services.",
    landmarks: ["Guildford Station precinct", "Chester Hill Reserve"],
    nearbySlugs: ["merrylands", "harris-park", "blacktown", "prospect"],
  },
  {
    slug: "prospect",
    name: "Prospect",
    postcode: "2148",
    region: "Greater Western Sydney",
    intro:
      "Prospect's residential pockets around Prospect Reservoir are serviced by our recurring residential cleaning teams, with commercial coverage for nearby Blacktown business areas.",
    landmarks: ["Prospect Reservoir", "Blacktown Showground"],
    nearbySlugs: ["blacktown", "greystanes", "seven-hills", "guildford"],
  },
  {
    slug: "rooty-hill",
    name: "Rooty Hill",
    postcode: "2766",
    region: "Greater Western Sydney",
    intro:
      "Rooty Hill homeowners and local businesses rely on Arise Property Care for dependable residential, end of lease and commercial cleaning across the suburb.",
    landmarks: ["Rooty Hill RSL precinct", "Rooty Hill Station"],
    nearbySlugs: ["blacktown", "prospect", "seven-hills", "sydney"],
  },
  {
    slug: "croydon",
    name: "Croydon",
    postcode: "2132",
    region: "Inner West Sydney",
    intro:
      "Croydon's leafy streets of heritage homes and townhouses are serviced by our residential cleaning teams, with flexible scheduling for busy Inner West households.",
    landmarks: ["Croydon Park", "Croydon Station heritage precinct"],
    nearbySlugs: ["strathfield", "five-dock", "sydney"],
  },
  {
    slug: "marsden-park",
    name: "Marsden Park",
    postcode: "2765",
    region: "Greater Western Sydney",
    intro:
      "As one of Sydney's fastest-growing new communities, Marsden Park's new-build homes and estates are a natural fit for our regular residential and builders cleaning services.",
    landmarks: ["Marsden Park Town Centre", "Marsden Park Sports Hub"],
    nearbySlugs: ["quakers-hill", "rooty-hill", "blacktown"],
  },
  {
    slug: "macquarie-park",
    name: "Macquarie Park",
    postcode: "2113",
    region: "North Shore",
    intro:
      "Macquarie Park's corporate campuses and business parks around Macquarie University and Macquarie Centre rely on our commercial and office cleaning teams for scheduled contracts.",
    landmarks: ["Macquarie Centre", "Macquarie University", "Macquarie Park Corporate precinct"],
    nearbySlugs: ["epping", "sydney"],
  },
  {
    slug: "rosehill",
    name: "Rosehill",
    postcode: "2142",
    region: "Greater Western Sydney",
    intro:
      "Rosehill's mix of family homes and units close to Parramatta River keep our residential cleaning teams busy, with commercial coverage for nearby event and business precincts.",
    landmarks: ["Rosehill Gardens Racecourse", "James Ruse Reserve"],
    nearbySlugs: ["parramatta", "harris-park", "auburn"],
  },
  {
    slug: "cherrybrook",
    name: "Cherrybrook",
    postcode: "2126",
    region: "The Hills District",
    intro:
      "Cherrybrook's established family homes and proximity to the Hills Metro line make it a popular suburb for our recurring residential and deep cleaning services.",
    landmarks: ["Cherrybrook Village", "Great Cherrybrook Farm Reserve"],
    nearbySlugs: ["castle-hill", "kellyville", "epping"],
  },
  {
    slug: "epping",
    name: "Epping",
    postcode: "2121",
    region: "North Shore",
    intro:
      "Epping's growing skyline of apartment towers around the station precinct, alongside its established family homes, are serviced by our residential and strata cleaning teams.",
    landmarks: ["Epping Station precinct", "Forest Park"],
    nearbySlugs: ["macquarie-park", "cherrybrook", "sydney"],
  },
  {
    slug: "quakers-hill",
    name: "Quakers Hill",
    postcode: "2763",
    region: "Greater Western Sydney",
    intro:
      "Quakers Hill's established residential streets and nearby retail strips are covered by our regular house cleaning and end of lease services.",
    landmarks: ["Quakers Hill Station precinct", "Nurragingy Reserve"],
    nearbySlugs: ["blacktown", "marsden-park", "rooty-hill"],
  },
  {
    slug: "kellyville",
    name: "Kellyville",
    postcode: "2155",
    region: "The Hills District",
    intro:
      "Kellyville's large family homes and fast-growing estates in the Hills District are a core part of our residential cleaning and deep clean coverage.",
    landmarks: ["Kellyville Station precinct", "Kellyville Park"],
    nearbySlugs: ["castle-hill", "baulkham-hills", "cherrybrook"],
  },
  {
    slug: "strathfield",
    name: "Strathfield",
    postcode: "2135",
    region: "Inner West Sydney",
    intro:
      "Strathfield's mix of grand heritage homes, apartments and its busy transport interchange make it an important Inner West suburb for our residential and strata cleaning teams.",
    landmarks: ["Strathfield Plaza", "Strathfield Station precinct"],
    nearbySlugs: ["croydon", "five-dock", "auburn"],
  },
  {
    slug: "chester-hill",
    name: "Chester Hill",
    postcode: "2162",
    region: "South West Sydney",
    intro:
      "Chester Hill's family homes and light industrial areas are serviced by our combined residential and commercial cleaning teams across the local area.",
    landmarks: ["Chester Hill Station precinct", "Chester Hill Reserve"],
    nearbySlugs: ["greenacre", "auburn", "potts-hill"],
  },
  {
    slug: "five-dock",
    name: "Five Dock",
    postcode: "2046",
    region: "Inner West Sydney",
    intro:
      "Five Dock's village-style shopping strip and surrounding family homes are serviced by our Inner West residential cleaning teams, with flexible weekly and fortnightly plans.",
    landmarks: ["Five Dock Shopping Village", "Timbrell Park"],
    nearbySlugs: ["croydon", "strathfield", "sydney"],
  },
  {
    slug: "auburn",
    name: "Auburn",
    postcode: "2144",
    region: "Greater Western Sydney",
    intro:
      "Auburn's diverse residential streets and busy commercial strip near the station are covered by our residential and commercial cleaning teams.",
    landmarks: ["Auburn Botanic Gardens", "Auburn Station precinct"],
    nearbySlugs: ["rosehill", "parramatta", "strathfield"],
  },
  {
    slug: "riverwood",
    name: "Riverwood",
    postcode: "2210",
    region: "Southern Sydney",
    intro:
      "Riverwood's family homes and units are serviced by our residential cleaning teams, with end of lease cleaning available for the suburb's rental market.",
    landmarks: ["Riverwood Plaza", "Riverwood Community Centre"],
    nearbySlugs: ["greenacre", "sydney"],
  },
  {
    slug: "potts-hill",
    name: "Potts Hill",
    postcode: "2143",
    region: "South West Sydney",
    intro:
      "Potts Hill's residential streets around the reservoir reserve are covered by our regular residential cleaning services, with commercial coverage for nearby business areas.",
    landmarks: ["Potts Hill Reservoir Reserve"],
    nearbySlugs: ["chester-hill", "greenacre", "auburn"],
  },
  {
    slug: "greenacre",
    name: "Greenacre",
    postcode: "2190",
    region: "South West Sydney",
    intro:
      "Greenacre's family homes and busy local shopping strip are serviced by our residential and end of lease cleaning teams across the Canterbury-Bankstown area.",
    landmarks: ["Greenacre Shopping Village", "Roberts Park"],
    nearbySlugs: ["chester-hill", "potts-hill", "riverwood"],
  },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}

export function getSuburbLinks(suburb: Suburb): Suburb[] {
  return suburb.nearbySlugs
    .map((slug) => suburbs.find((s) => s.slug === slug))
    .filter((s): s is Suburb => Boolean(s));
}
