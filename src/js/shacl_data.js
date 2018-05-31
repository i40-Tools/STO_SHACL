// example data can be taken from http://shacl.org/playground/
// Datatype Reference: http://books.xmlschemata.org/relaxng/relax-CHP-19.html

let shapes = `@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sto: <https://w3id.org/i40/sto#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix lingg: <http://purl.org/linguistics/gold/> .

sto:StandardShape
    a sh:NodeShape ;
    sh:targetClass sto:Standard ;
    sh:property [
      sh:path rdf:type ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path rdfs:label ;
      sh:datatype rdf:langString ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path rdfs:comment ;
      sh:datatype rdf:langString ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path sto:publisher ;
      sh:minCount 1 ;
      sh:nodeKind sh:IRI ;
      sh:pattern "^https://w3id.org/i40/sto#" ;
    ] ;
    sh:property [
      sh:path sto:hasDomain ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path dcterms:license ;
      sh:datatype rdf:langString ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path sto:developer ;
      sh:minCount 1 ;
    ] ;
    sh:property [
      sh:path sto:hasOfficialResource ;
      sh:nodeKind sh:IRI ;
    ] ;
    sh:property [
      sh:path sto:hasClassification ;
    ] ;
    sh:property [
      sh:path sto:hasDBpediaResource ;
      sh:maxCount 1 ;
      sh:nodeKind sh:IRI ;
      sh:pattern "^http://dbpedia.org/" ;
    ] ;
    sh:property [
        sh:path owl:sameAs ;
    ] ;
    sh:property [
      sh:path dcterms:subject ;
    ] ;
    sh:property [
      sh:path sto:hasWikipediaArticle ;
      sh:maxCount 1 ;
      sh:nodeKind sh:IRI ;
      sh:pattern "^https://en.wikipedia.org/" ;
    ] ;
    sh:property [
      sh:path lingg:hypernym ;
    ] ;
    sh:property [
      sh:path sto:relatedTo ;
    ] ;
    sh:property [
      sh:path sto:hasPublicationDate ;
    ] ;
    sh:property [
      sh:path sto:isPartOf ;
    ] ;
    sh:property [
      sh:path sto:wasDerivedFrom ;
    ] ;
    sh:property [
      sh:path sto:isImplementationOf ;
    ] ;
    sh:property [
      sh:path sto:hasTag ;
      sh:datatype rdf:langString ;
    ] ;
    sh:property [
      sh:path sto:motivation ;
      sh:datatype rdf:langString ;
    ] ;
    sh:property [
      sh:path skos:altLabel ;
      sh:datatype rdf:langString ;
    ] ;
    sh:property [
      sh:path skos:note ;
      sh:datatype rdf:langString ;
    ] ;
    sh:property [
      sh:path rdfs:isDefinedBy ;
      sh:minCount 1 ;
      sh:maxCount 1 ;
      sh:nodeKind sh:IRI ;
    ] ;
    sh:property [
      sh:path rdfs:seeAlso ;
      sh:minCount 1 ;
      sh:maxCount 1 ;
      sh:nodeKind sh:IRI ;
    ] .
`

let constraintsHierarchy = {
  1: {
    constraints: ['MinCountConstraintComponent', 'MaxCountConstraintComponent'],
    color: 'navajowhite'
  },
  2: {
    constraints: ['NodeKindConstraintComponent', 'DatatypeConstraintComponent', 'PatternConstraintComponent'],
    color: 'lemonchiffon'
  }
}

let prefixes = [
  {
    prfx: 'cc',
    uri: 'http://creativecommons.org/ns#'
  }, {
    prfx: 'dbo',
    uri: 'http://dbpedia.org/ontology#'
  }, {
    prfx: 'dbont',
    uri: 'http://dbpedia.org/ontology/'
  }, {
    prfx: 'dbpcy',
    uri: 'http://dbpedia.org/class/yago/'
  }, {
    prfx: 'dbprop',
    uri: 'http://dbpedia.org/property/'
  }, {
    prfx: 'dbr',
    uri: 'http://dbpedia.org/resource#'
  }, {
    prfx: 'dbrc',
    uri: 'http://dbpedia.org/resource/Category:'
  }, {
    prfx: 'dbres',
    uri: 'http://dbpedia.org/resource/'
  }, {
    prfx: 'dcterms',
    uri: 'http://purl.org/dc/terms/'
  }, {
    prfx: 'deo',
    uri: 'http://purl.org/spar/deo/'
  }, {
    prfx: 'dul',
    uri: 'http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#'
  }, {
    prfx: 'dc11',
    uri: 'http://purl.org/dc/elements/1.1/'
  }, {
    prfx: 'doap',
    uri: 'http://usefulinc.com/ns/doap#'
  }, {
    prfx: 'foaf',
    uri: 'http://xmlns.com/foaf/0.1/'
  }, {
    prfx: 'geo',
    uri: 'http://www.geonames.org/ontology#'
  }, {
    prfx: 'lingg',
    uri: 'http://purl.org/linguistics/gold/'
  }, {
    prfx: 'muto',
    uri: 'http://purl.org/muto/core#'
  }, {
    prfx: 'owl',
    uri: 'http://www.w3.org/2002/07/owl#'
  }, {
    prfx: 'prov',
    uri: 'http://www.w3.org/ns/prov#'
  }, {
    prfx: 'rami',
    uri: 'https://w3id.org/i40/rami#'
  }, {
    prfx: 'rdf',
    uri: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
  }, {
    prfx: 'rdfs',
    uri: 'http://www.w3.org/2000/01/rdf-schema#'
  }, {
    prfx: 'skos',
    uri: 'http://www.w3.org/2004/02/skos/core#'
  }, {
    prfx: 'schema',
    uri: 'http://schema.org/'
  }, {
    prfx: 'sto',
    uri: 'https://w3id.org/i40/sto#'
  }, {
    prfx: 'vann',
    uri: 'http://purl.org/vocab/vann/'
  }, {
    prfx: 'voaf',
    uri: 'http://purl.org/vocommons/voaf#'
  }, {
    prfx: 'vocvr',
    uri: 'http://purl.org/voc/vrank#'
  }, {
    prfx: 'wike',
    uri: 'http://www.wikidata.org/entity/'
  }, {
    prfx: 'xml',
    uri: 'http://www.w3.org/XML/1998/namespace'
  }, {
    prfx: 'xsd',
    uri: 'http://www.w3.org/2001/XMLSchema#'
  }, {
    prfx: 'shcl',
    uri: 'http://www.w3.org/ns/shacl#'
  }
]

/*let prefixes_new = {
  'http://creativecommons.org/ns#': 'cc',
  'http://dbpedia.org/ontology#': 'dbo',
  'http://dbpedia.org/ontology/': 'dbont',
  'http://dbpedia.org/class/yago/': 'dbpcy',
  'http://dbpedia.org/property/': 'dbprop',
  'http://dbpedia.org/resource#': 'dbr',
  'http://dbpedia.org/resource/Category:': 'dbrc',
  'http://dbpedia.org/resource/': 'dbres',
  'http://purl.org/dc/terms/': 'dcterms',
  'http://purl.org/spar/deo/': 'deo',
  'http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#': 'dul',
  'http://purl.org/dc/elements/1.1/': 'dc11',
  'http://usefulinc.com/ns/doap#': 'doap',
  'http://xmlns.com/foaf/0.1/': 'foaf',
  'http://www.geonames.org/ontology#': 'geo',
  'http://purl.org/linguistics/gold/': 'lingg',
  'http://purl.org/muto/core#': 'muto',
  'http://www.w3.org/2002/07/owl#': 'owl',
  'http://www.w3.org/ns/prov#': 'prov',
  'https://w3id.org/i40/rami#': 'rami',
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
  'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
  'http://www.w3.org/2004/02/skos/core#': 'skos',
  'http://schema.org/': 'schema',
  'https://w3id.org/i40/sto#': 'sto',
  'http://purl.org/vocab/vann/': 'vann',
  'http://purl.org/vocommons/voaf#': 'voaf',
  'http://purl.org/voc/vrank#': 'vocvr',
  'http://www.wikidata.org/entity/': 'wike',
  'http://www.w3.org/XML/1998/namespace': 'xml',
  'http://www.w3.org/2001/XMLSchema#': 'xsd'
}*/
