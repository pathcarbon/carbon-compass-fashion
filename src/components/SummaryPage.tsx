import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import { 
  Globe, Droplets, Sprout, Zap, Download, FileText, 
  Info, ToggleLeft, ToggleRight, ArrowLeft 
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for the demo
const impactData = [
  { category: "Climate Impact", value: 5.42, unit: "kg CO₂e", fossil: 4.1, biogenic: 0.9, luLuc: 0.42, icon: Globe },
  { category: "Water Use", value: 680, unit: "L", icon: Droplets },
  { category: "Land Use", value: 3.12, unit: "m²a", icon: Sprout },
  { category: "Energy Use", value: 12.1, unit: "MJ", renewable: 4.2, nonRenewable: 7.9, icon: Zap }
];

const supplyChainData = [
  { stage: "Fibre", climate_fossil: 1.8, climate_biogenic: 0.3, climate_luluc: 0.0, water: 250, land: 1.8, energy: 4.2 },
  { stage: "Yarn", climate_fossil: 1.1, climate_biogenic: 0.1, climate_luluc: 0.0, water: 180, land: 0.8, energy: 3.1 },
  { stage: "Fabric", climate_fossil: 1.0, climate_biogenic: 0.4, climate_luluc: 0.4, water: 200, land: 0.4, energy: 3.8 },
  { stage: "Garment", climate_fossil: 0.2, climate_biogenic: 0.1, climate_luluc: 0.02, water: 50, land: 0.12, energy: 1.0 }
];

const climateBreakdown = [
  { name: "Fossil", value: 4.1, color: "#dc2626" },
  { name: "Biogenic", value: 0.9, color: "#16a34a" },
  { name: "LU-LUC", value: 0.42, color: "#ea580c" }
];

const energyBreakdown = [
  { name: "Renewable", value: 4.2, color: "#16a34a" },
  { name: "Non-Renewable", value: 7.9, color: "#dc2626" }
];

const detailedTableData = [
  { 
    stage: "Fibre", 
    fossilCO2: 1.8, 
    biogenicCO2: 0.3, 
    luLucCO2: 0.0, 
    landUse: 1.8, 
    waterUse: 250, 
    renewableMJ: 1.5, 
    nonRenewableMJ: 2.7 
  },
  { 
    stage: "Yarn", 
    fossilCO2: 1.1, 
    biogenicCO2: 0.1, 
    luLucCO2: 0.0, 
    landUse: 0.8, 
    waterUse: 180, 
    renewableMJ: 1.2, 
    nonRenewableMJ: 1.9 
  },
  { 
    stage: "Fabric", 
    fossilCO2: 1.0, 
    biogenicCO2: 0.4, 
    luLucCO2: 0.4, 
    landUse: 0.4, 
    waterUse: 200, 
    renewableMJ: 1.3, 
    nonRenewableMJ: 2.5 
  },
  { 
    stage: "Garment", 
    fossilCO2: 0.2, 
    biogenicCO2: 0.1, 
    luLucCO2: 0.02, 
    landUse: 0.12, 
    waterUse: 50, 
    renewableMJ: 0.2, 
    nonRenewableMJ: 0.8 
  }
];

const radarData = [
  { category: "Climate Impact", value: 85, benchmark: 100 },
  { category: "Water Use", value: 65, benchmark: 100 },
  { category: "Land Use", value: 45, benchmark: 100 },
  { category: "Energy Use", value: 75, benchmark: 100 }
];

export const SummaryPage = () => {
  const [viewMode, setViewMode] = useState<"absolute" | "percentage">("absolute");
  const [showBenchmark, setShowBenchmark] = useState(false);

  const COLORS = ["#158c4a", "#14b8a6", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                Product Environmental Impact Summary
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive carbon footprint analysis across the supply chain
              </p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Demo Product
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactData.map((impact, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {impact.category}
                </CardTitle>
                <impact.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {impact.value} {impact.unit}
                </div>
                {(impact.fossil || impact.renewable) && (
                  <div className="text-xs text-muted-foreground mt-2">
                    {impact.fossil && (
                      <div>Fossil: {impact.fossil} | Biogenic: {impact.biogenic} | LU-LUC: {impact.luLuc}</div>
                    )}
                    {impact.renewable && (
                      <div>Renewable: {impact.renewable} | Non-Renewable: {impact.nonRenewable}</div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="charts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            <TabsTrigger value="data">Data Table</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>

          <TabsContent value="charts" className="space-y-8">
            {/* Controls */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Absolute</span>
                      <Switch 
                        checked={viewMode === "percentage"}
                        onCheckedChange={(checked) => setViewMode(checked ? "percentage" : "absolute")}
                      />
                      <span className="text-sm">Percentage</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowBenchmark(!showBenchmark)}
                  >
                    <Info className="h-4 w-4 mr-2" />
                    {showBenchmark ? "Hide" : "Show"} Benchmark
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Supply Chain Stacked Bar Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Climate Impact Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Climate Impact (kg CO₂e)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={supplyChainData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="climate_fossil" stackId="climate" fill="#dc2626" name="Fossil CO₂" />
                      <Bar dataKey="climate_biogenic" stackId="climate" fill="#16a34a" name="Biogenic CO₂" />
                      <Bar dataKey="climate_luluc" stackId="climate" fill="#ea580c" name="LU-LUC CO₂" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Water Use Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Water Use (Liters)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={supplyChainData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="water" fill="#0ea5e9" name="Water Use (L)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Radar Chart */}
            {showBenchmark && (
              <Card>
                <CardHeader>
                  <CardTitle>Industry Benchmark Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="category" />
                      <PolarRadiusAxis domain={[0, 120]} />
                      <Radar 
                        name="Product" 
                        dataKey="value" 
                        stroke={COLORS[0]} 
                        fill={COLORS[0]} 
                        fillOpacity={0.3} 
                      />
                      <Radar 
                        name="Industry Average" 
                        dataKey="benchmark" 
                        stroke={COLORS[3]} 
                        fill={COLORS[3]} 
                        fillOpacity={0.1} 
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Climate Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Climate Impact Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={climateBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {climateBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {climateBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}: {item.value}kg</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Energy Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Energy Source Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={energyBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {energyBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {energyBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}: {item.value}MJ</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Data Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Stage</th>
                        <th className="border border-border p-3 text-left">Fossil CO₂</th>
                        <th className="border border-border p-3 text-left">Biogenic CO₂</th>
                        <th className="border border-border p-3 text-left">LU-LUC CO₂</th>
                        <th className="border border-border p-3 text-left">Land Use</th>
                        <th className="border border-border p-3 text-left">Water Use</th>
                        <th className="border border-border p-3 text-left">Renewable MJ</th>
                        <th className="border border-border p-3 text-left">Non-Renewable MJ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailedTableData.map((row, index) => (
                        <tr key={index} className="hover:bg-muted/50">
                          <td className="border border-border p-3 font-medium">{row.stage}</td>
                          <td className="border border-border p-3">{row.fossilCO2}</td>
                          <td className="border border-border p-3">{row.biogenicCO2}</td>
                          <td className="border border-border p-3">{row.luLucCO2}</td>
                          <td className="border border-border p-3">{row.landUse}</td>
                          <td className="border border-border p-3">{row.waterUse}</td>
                          <td className="border border-border p-3">{row.renewableMJ}</td>
                          <td className="border border-border p-3">{row.nonRenewableMJ}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export">
            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button variant="outline" size="lg" className="flex items-center justify-center space-x-2 h-20">
                    <FileText className="h-8 w-8" />
                    <div>
                      <div className="font-semibold">Export as PDF</div>
                      <div className="text-sm text-muted-foreground">Compliance-ready report</div>
                    </div>
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center justify-center space-x-2 h-20">
                    <Download className="h-8 w-8" />
                    <div>
                      <div className="font-semibold">Download Excel</div>
                      <div className="text-sm text-muted-foreground">Raw data for analysis</div>
                    </div>
                  </Button>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">
                    Reports include full methodology, data sources, and compliance certifications
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};